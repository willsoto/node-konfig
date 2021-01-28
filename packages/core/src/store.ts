import setWith from "lodash.setwith";
import { NoValueForKeyError } from "./errors";
import { Loader } from "./loaders";

export interface StoreOptions {
  name?: string;
  loaders?: Loader[];
}

type Config = Record<string, unknown>;

/**
 * Holds the configuration object.
 *
 * @example
 * ```
 * const store = new Store();
 * ```
 *
 * @public
 */
export class Store<TConfig extends Config = Record<string, unknown>> {
  /**
   * Keeps track of all the groups associated with this Store instance.
   *
   * @internal
   */
  #groups: Store[] = [];
  /**
   * Keeps track of all the loaders associated with this Store instance.
   *
   * @internal
   */
  #loaders: Loader[] = [];

  readonly options: Required<Pick<StoreOptions, "name">>;

  // Without the type assertion, I get TS error 2322:
  //// Type '{}' is not assignable to type 'TConfig'.
  //// '{}' is assignable to the constraint of type 'TConfig',
  //// but 'TConfig' could be instantiated with a different subtype
  //// of constraint 'Record<string, unknown>'.
  // I don't know how to fix it though...
  private config: TConfig = {} as TConfig;

  constructor(options: StoreOptions = {}) {
    const { loaders = [], ...rest } = options;

    this.options = {
      name: "default",
      ...rest,
    };

    this.registerLoaders(...loaders);
  }

  /**
   * The primary way to retrieve values from the {@link Store | Store}.
   * Can traverse through `Group` as well.
   *
   * @param accessor - the path to the desired value within the store.
   *
   * @example
   * ```
   * const store = new Store();
   *
   * const value = store.get("path.to.my.thing");
   * ```
   *
   * @public
   */
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

  /**
   * If the given accessor is not present on the store or the returned value is `null`,
   * an error will be thrown.
   *
   * {@link Store.get}
   */
  getOrThrow<T>(accessor: string): T {
    const value = this.get(accessor);

    if (value === null || value === undefined) {
      throw new NoValueForKeyError(accessor);
    }
    return value as T;
  }

  /**
   * Manually set a value to the `Store`.
   * In most circumstances, you should not need to use this directly.
   *
   * @param accessor - the path to the desired value within the store.
   * @param value - the value to set at `accessor`
   *
   * @public
   */
  set(accessor: string, value: unknown): TConfig {
    return setWith(this.config, accessor, value, function (nsValue, key) {
      if (nsValue instanceof Store) {
        return nsValue.set(key, value) as TConfig;
      }
    });
  }

  /**
   * Check if a particular accessor exists in the config.
   *
   * @param accessor - the path to the desired value within the store.
   *
   * @public
   */
  has(accessor: string): boolean {
    return accessor in this.config;
  }

  /**
   * Register a `Loader` to this `Store`. Use {@link Store.init} to initialize all of the Store's
   * registered loaders.
   *
   * @param loader - Any `Loader` subclass
   *
   * @public
   */
  registerLoader(loader: Loader): this {
    this.#loaders.push(loader);

    return this;
  }

  /**
   * Registers multiple loaders at once.
   */
  registerLoaders(...loaders: Loader[]): this {
    loaders.forEach((loader) => this.registerLoader(loader));

    return this;
  }

  /**
   * Given a config, will recursively merge all of its properties onto this instance's config.
   * If a Group (ie `Store`) is encountered, it will correctly merge those properties onto that Group.
   *
   * @param config - The config to merge with this instance's config
   *
   * @public
   */
  assign(config: TConfig): this {
    Object.keys(config).forEach((key) => {
      const existingValue = this.config[key];

      if (existingValue instanceof Store) {
        existingValue.assign(config[key]);
      } else {
        this.set(key, config[key]);
      }
    });

    return this;
  }

  /**
   * Used to initialize the `Store` and process all registered `Loaders` and groups within.
   *
   * @public
   */
  async init(): Promise<void> {
    for (const loader of this.#loaders) {
      await loader.load(this);
    }

    // Process all groups after the parent store is initialized
    for (const group of this.#groups) {
      await group.init();
    }
  }

  /**
   * Serialize the Store's configuration object. This will traverse all groups as well.
   *
   * @public
   */
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

  /**
   * Get or set a sub-`Store` (group). Once a group has been created, you can register loaders
   * specfic to that group. Calling `Store#init` on the parent `Store` will also initialize all the groups
   * registered to that `Store` instance.
   *
   * @param name - The name of the group. This name is also how you access the group after creation.
   *
   * @example
   * ```
   * const store = new Store();
   *
   * store.registerLoader(new Loader());
   *
   * const group = store.group("myGroup");
   *
   * group.registerLoader(new Loader());
   *
   * await store.init();
   * ```
   *
   * @public
   */
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

  /**
   * @internal
   */
  get name(): string {
    return this.options.name;
  }
}
