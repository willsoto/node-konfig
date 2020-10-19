import fs from "fs";
import { Parser } from "../parsers";
import { Store } from "../store";
import { Loader } from "./interface";

interface File {
  path: string;
  parser: Parser;
}

interface FileLoaderOptions {
  files: File[];
}

export class FileLoader implements Loader {
  readonly options: FileLoaderOptions;

  name = "file";

  constructor(options: FileLoaderOptions) {
    this.options = options;
  }

  async load(store: Store): Promise<void> {
    for (const file of this.options.files) {
      const contents = await fs.promises.readFile(file.path, "utf-8");
      const result = file.parser.parse(contents);

      console.log("Parse result", result);

      store.append(result);
    }
  }
}
