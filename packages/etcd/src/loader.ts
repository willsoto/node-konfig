import {
  KeyNotFoundError,
  Loader,
  LoaderOptions,
  Parser,
  Store,
} from "@willsoto/node-konfig-core";
import { Etcd3, IOptions } from "etcd3";

interface Key {
  accessor: string;
  parser: Parser;
}

export interface EtcdLoaderOptions extends LoaderOptions {
  keys: Key[];
  etcd3Options?: IOptions;
}

export class EtcdLoader extends Loader {
  readonly options: EtcdLoaderOptions;
  readonly client: Etcd3;

  name = "etcd";

  constructor(options: EtcdLoaderOptions) {
    super(options);

    this.options = options;
    this.client = new Etcd3(options.etcd3Options);
  }

  async load(store: Store): Promise<void> {
    if (this.maxRetries > 0) {
      return this.retryPolicy.execute(() => this.execute(store));
    }

    return this.execute(store);
  }

  async execute(store: Store): Promise<void> {
    for (const key of this.options.keys) {
      const response = await this.client.get(key.accessor);

      if (!response) {
        if (this.stopOnFailure) {
          throw new KeyNotFoundError(`No value for accessor: ${key.accessor}`);
        } else {
          continue;
        }
      }

      store.set(key.accessor, key.parser.parse(response));
    }
  }
}
