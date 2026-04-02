import { KeyNotFoundError, Loader, LoaderOptions, Parser, Store } from "@willsoto/node-konfig-core";

interface Key {
  key: string;
  prefix?: string;
  replacer?: (key: string) => string;
  parser?: Parser;
}

type GetResponse = {
  LockIndex: number;
  Key: string;
  Flags: number;
  Value: string;
  CreateIndex: number;
  ModifyIndex: number;
};

export interface ConsulOptions {
  host?: string;
  port?: number;
  secure?: boolean;
}

export interface ConsulLoaderOptions extends LoaderOptions {
  keys: Key[];
  consulOptions?: ConsulOptions;
}

export class ConsulLoader extends Loader {
  readonly options: ConsulLoaderOptions;
  readonly baseUrl: string;

  name = "consul";

  constructor(options: ConsulLoaderOptions) {
    super(options);

    this.options = options;

    const { host = "127.0.0.1", port = 8500, secure = false } = options.consulOptions ?? {};
    this.baseUrl = `${secure ? "https" : "http"}://${host}:${port}`;
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
        const response = await fetch(`${this.baseUrl}/v1/kv/${key.key}`);

        if (response.status === 404) {
          throw new KeyNotFoundError(key.key);
        }

        if (!response.ok) {
          throw new Error(`Consul request failed: ${response.status} ${response.statusText}`);
        }

        const body = (await response.json()) as GetResponse[];
        const entry = body[0];

        if (!entry) {
          throw new KeyNotFoundError(key.key);
        }

        const decodedValue = entry.Value
          ? Buffer.from(entry.Value, "base64").toString("utf-8")
          : "";

        const [accessor, value] = this.postLoad(key, entry.Key, decodedValue);

        store.set(accessor, value);
      } catch (error) {
        if (this.stopOnFailure) {
          throw error;
        }
      }
    }
  }

  private postLoad(key: Key, accessor: string, value: unknown): [accessor: string, value: unknown] {
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
