import { setWith } from "lodash";
import { NoValueForKeyError } from "./errors";
import { Loader } from "./loaders";
import { PathKeys, PropType } from "./types";

export interface StoreOptions {
  name?: string;
  loaders?: Loader[];
  loadersByEnvironment?: Record<string, Loader[]>;
}

// Use an object type here instead of `Record<string, unknown>` since it makes
// property autocomplete work - eg when using `store.get("property")`.
// Maybe this is a bug?
// eslint-disable-next-line @typescript-eslint/ban-types
type Config = object;

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
    const { loaders = [], loadersByEnvironment = {}, ...rest } = options;

    this.options = {
      name: "default",
      ...rest,
    };

    this.registerLoaders(...loaders);
    // Environment loaders should always be loaded last since anything registered
    // for a particular environment should always be processed last against any loader that has been registered
    // without an associated environment.
    this.registerLoadersByEnvironment(loadersByEnvironment);
  }

  /**
   * @internal
   */
  get name(): string {
    return this.options.name;
  }

  /**
   * @internal
   */
  private get environment(): string {
    if (typeof process.env.NODE_KONFIG_ENV === "string") {
      return process.env.NODE_KONFIG_ENV;
    } else if (typeof process.env.NODE_ENV === "string") {
      return process.env.NODE_ENV;
    }
    return "development";
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
  get<P extends PathKeys<TConfig>>(accessor: P): PropType<TConfig, P> {
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
      return current.toJSON() as PropType<TConfig, P>;
    }

    return current as PropType<TConfig, P>;
  }

  /**
   * If the given accessor is not present on the store or the returned value is `null`,
   * an error will be thrown.
   *
   * {@link Store.get}
   */
  getOrThrow<P extends PathKeys<TConfig>>(accessor: P): PropType<TConfig, P> {
    const value = this.get(accessor);

    if (value === null || value === undefined) {
      throw new NoValueForKeyError(accessor);
    }
    return value;
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
   *
   * @param loadersByEnvironment - An object composed of keys representing the
   * environment mapping to any loaders that should be registered. Will determine the
   * environment based on the value of `NODE_KONFIG_ENV` first (if set), `NODE_ENV` second (if set)
   * and default to "development"
   *
   * @example
   * ```
   * store.registerLoadersByEnvironment({
   *   development: [new FileLoader()],
   *   staging: [new VaultLoader()],
   *   production: [new VaultLoader()],
   * });
   *```

   * @public
   */
  registerLoadersByEnvironment(
    loadersByEnvironment: Record<string, Loader[]>,
  ): this {
    const environmentLoaders = loadersByEnvironment[this.environment] ?? [];

    this.registerLoaders(...environmentLoaders);

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
      const existingValue = (this.config as Record<string, unknown>)[key];

      if (existingValue instanceof Store) {
        existingValue.assign((config as Record<string, unknown>)[key]);
      } else {
        this.set(key, (config as Record<string, unknown>)[key]);
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
      // eslint-disable-next-line @typescript-eslint/ban-types
      await loader.load(this as unknown as Store<Record<string, unknown>>);
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const [key, value] = current;

      if (value instanceof Store) {
        return {
          ...accumlator,
          [key]: value.toJSON(),
        };
      }

      return {
        ...accumlator,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
   * @param options - Any options to pass to the underlying store. Note that options will be **ignored**
   * on subsequent calls once the group has been initialized.
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
   * // Options can be passed to the store when creating a group
   * store.group("database", {
   *   loaders: [new Loader()]
   * })
   *
   * await store.init();
   * ```
   *
   * @public
   */
  group(name: string, options: StoreOptions = {}): Store {
    let group = this.#groups.find((group) => group.name === name);

    if (group) {
      return group;
    }

    group = new Store({
      name,
      ...options,
    });

    this.set(name, group);
    this.#groups.push(group);

    return group;
  }
}
