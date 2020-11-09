import {
  KeyNotFoundError,
  Loader,
  LoaderOptions,
  Parser,
  Store,
} from "@willsoto/node-konfig-core";
import consul from "consul";

interface Key {
  key: string;
  prefix?: string;
  replacer?: (key: string) => string;
  parser?: Parser;
  getOptions?: consul.Kv.GetOptions;
}

type GetResponse = {
  LockIndex: number;
  Key: string;
  Flags: number;
  Value: string;
  CreateIndex: number;
  ModifyIndex: number;
};

export interface ConsulLoaderOptions extends LoaderOptions {
  keys: Key[];
  client: consul.Consul;
}

export class ConsulLoader extends Loader {
  readonly options: ConsulLoaderOptions;
  readonly client: consul.Consul;

  name = "consul";

  constructor(options: ConsulLoaderOptions) {
    super(options);

    this.options = options;
    this.client = options.client;
  }

  async load(store: Store): Promise<void> {
    if (this.maxRetries > 0) {
      return this.retryPolicy.execute(() => this.process(store));
    }

    return this.process(store);
  }

  async process(store: Store): Promise<void> {
    for (const key of this.options.keys) {
      try {
        const response = await this.client.kv.get<GetResponse>(key.key);

        if (!response) {
          throw new KeyNotFoundError(`Key not found: ${key.key}`);
        }

        const [accessor, value] = this.postLoad(
          key,
          response.Key,
          response.Value,
        );

        store.set(accessor, value);
      } catch (error) {
        if (this.stopOnFailure) {
          throw error;
        }
      }
    }
  }

  private postLoad(
    key: Key,
    accessor: string,
    value: unknown,
  ): [accessor: string, value: unknown] {
    if (key.prefix) {
      accessor = `${key.prefix}${accessor}`;
    }

    if (key.replacer) {
      accessor = key.replacer(accessor);
    }

    if (key.parser && typeof value === "string") {
      value = key.parser.parse(value);
    }

    return [accessor, value];
  }
}
