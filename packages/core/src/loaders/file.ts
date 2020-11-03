import fs from "fs";
import { Parser } from "../parsers";
import { Store } from "../store";
import { Loader, LoaderOptions } from "./base";

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

  async load(store: Store): Promise<void> {
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
