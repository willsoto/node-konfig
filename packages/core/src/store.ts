import get from "lodash.get";
import set from "lodash.set";
import { Loader } from "./loaders";

interface StoreOptions {
  name?: string;
}

type Config = Record<string, unknown>;

export class Store {
  readonly options: StoreOptions;

  private config: Config = {};
  private loaders: Loader[] = [];

  constructor(options: StoreOptions = {}) {
    this.options = {
      name: "default",
      ...options,
    };
  }

  get<T>(key: string): T {
    return get(this.config, key) as T;
  }

  set(key: string, value: unknown): void {
    set(this.config, key, value);
  }

  registerLoader(loader: Loader): void {
    this.loaders.push(loader);
  }

  assign(config: Config): void {
    this.config = {
      ...this.config,
      ...config,
    };
  }

  async init(): Promise<void> {
    for (const loader of this.loaders) {
      await loader.load(this);
    }
  }

  value(): Record<string, unknown> {
    return this.config;
  }
}
