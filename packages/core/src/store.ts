import setWith from "lodash.setwith";
import { Loader } from "./loaders";

interface StoreOptions {
  name?: string;
}

type Config = Record<string, unknown>;

export class Store<TConfig extends Config = Record<string, unknown>> {
  #groups: Store[] = [];

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

    if (current instanceof Store) {
      return current.toJSON() as T;
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

  registerLoader(loader: Loader): this {
    this.loaders.push(loader);

    return this;
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

    // Process all groups after the parent store is initialized
    for (const group of this.#groups) {
      await group.init();
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
    let group = this.#groups.find((group) => group.name === name);

    if (group) {
      return group;
    }

    group = new Store({
      name,
    });

    this.set(name, group);
    this.#groups.push(group);

    return group;
  }

  get name(): string {
    return this.options.name;
  }
}
