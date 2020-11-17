import setWith from "lodash.setwith";
import { Loader } from "./loaders";

interface StoreOptions {
  name?: string;
}

type Config = Record<string, unknown>;

export class Store<TConfig extends Config = Record<string, unknown>> {
  readonly options: Required<StoreOptions>;

  // Without the type assertion, I get TS error 2322:
  //// Type '{}' is not assignable to type 'TConfig'.
  //// '{}' is assignable to the constraint of type 'TConfig',
  //// but 'TConfig' could be instantiated with a different subtype
  //// of constraint 'Record<string, unknown>'.
  // I don't know how to fix it though...
  private config: TConfig = {} as TConfig;
  private loaders: Loader[] = [];

  constructor(options: StoreOptions = {}) {
    this.options = {
      name: "default",
      ...options,
    };
  }

  get<T>(accessor: string): T {
    const path = accessor.split(".");
    let current: Config | unknown = this.config;
    let index = 0;

    while (index < path.length && current !== undefined) {
      const key = path[index++];

      if (current instanceof Store) {
        current = current.get(key);
      } else if (typeof current === "object" && current !== null) {
        current = (current as Record<string, unknown>)[key];
      }
    }

    return current as T;
  }

  set(accessor: string, value: unknown): TConfig {
    return setWith(this.config, accessor, value, function (nsValue, key) {
      if (nsValue instanceof Store) {
        return nsValue.set(key, value) as TConfig;
      }
    });
  }

  registerLoader(loader: Loader): void {
    this.loaders.push(loader);
  }

  assign(config: Config): this {
    this.config = {
      ...this.config,
      ...config,
    };

    return this;
  }

  async init(): Promise<void> {
    for (const loader of this.loaders) {
      await loader.load(this);
    }
  }

  toJSON(): Record<string, unknown> {
    return Object.entries(this.config).reduce((accumlator, current) => {
      const [key, value] = current;

      if (value instanceof Store) {
        return {
          ...accumlator,
          [key]: value.toJSON(),
        };
      }

      return {
        ...accumlator,
        [key]: value,
      };
    }, {});
  }

  group(name: string): Store {
    const group = this.get<Store | undefined>(name);

    if (group instanceof Store && group.name === name) {
      return group;
    }

    const store = new Store({
      name,
    });

    this.set(name, store);

    return store;
  }

  get name(): string {
    return this.options.name;
  }
}
