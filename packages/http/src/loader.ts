import {
  Loader,
  LoaderOptions,
  Parser,
  Store,
} from "@willsoto/node-konfig-core";
import { Got, HTTPAlias } from "got";

interface Source {
  url: string;
  /**
   * @default GET
   */
  method?: HTTPAlias;
  parser: Parser;
  client: Got;
}

export interface HttpLoaderOptions extends LoaderOptions {
  sources: Source[];
}

export class HttpLoader extends Loader {
  readonly options: HttpLoaderOptions;

  name = "http";

  constructor(options: HttpLoaderOptions) {
    super(options);

    this.options = options;
  }

  async load(store: Store): Promise<void> {
    if (this.maxRetries > 0) {
      return this.retryPolicy.execute(() => this.process(store));
    }

    return this.process(store);
  }

  async process(store: Store): Promise<void> {
    for (const source of this.options.sources) {
      try {
        const response = await source.client(source.url, {
          method: source.method ?? "GET",
        });
        const { body } = response;
        const parsedBody = source.parser.parse(body);

        for (const key in parsedBody) {
          store.set(key, parsedBody[key]);
        }
      } catch (error) {
        if (this.stopOnFailure) {
          throw error;
        }
      }
    }
  }
}
