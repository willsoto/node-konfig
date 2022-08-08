import {
  Loader,
  LoaderOptions,
  Parser,
  Store,
} from "@willsoto/node-konfig-core";
import fetch, { RequestInit } from "node-fetch";

interface Source {
  url: string;
  fetchOptions?: RequestInit;
  parser: Parser;
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
        const response = await fetch(source.url, source.fetchOptions);

        const body = await response.text();
        const parsedBody = source.parser.parse(body);

        for (const key in parsedBody) {
          store.set(key, parsedBody[key]);
        }
      } catch (error: unknown) {
        if (this.stopOnFailure) {
          throw error;
        }
      }
    }
  }
}
