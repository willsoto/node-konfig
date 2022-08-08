import {
  Loader,
  LoaderOptions,
  Parser,
  Store,
} from "@willsoto/node-konfig-core";
import fs from "node:fs";

interface File {
  path: string;
  parser: Parser;
}

export interface FileLoaderOptions extends LoaderOptions {
  files: File[];
}

export class FileLoader extends Loader {
  readonly options: FileLoaderOptions;

  name = "file";

  constructor(options: FileLoaderOptions) {
    super(options);

    this.options = options;
  }

  load(store: Store): Promise<void> {
    if (this.maxRetries > 0) {
      return this.retryPolicy.execute(() => this.processFiles(store));
    }

    return this.processFiles(store);
  }

  async processFiles(store: Store): Promise<void> {
    for (const file of this.options.files) {
      try {
        const contents = await fs.promises.readFile(file.path, "utf-8");
        const result = file.parser.parse(contents);

        store.assign(result);
      } catch (error) {
        if (this.stopOnFailure) {
          throw error;
        }
      }
    }
  }
}
