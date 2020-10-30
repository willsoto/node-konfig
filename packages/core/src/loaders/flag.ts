import yargs from "yargs";
import { Store } from "../store";
import { Loader } from "./interface";

export interface FlagLoaderOptions {
  flags: yargs.Argv["argv"];
}

export class FlagLoader implements Loader {
  readonly options: FlagLoaderOptions;

  name = "flag";

  constructor(options: FlagLoaderOptions) {
    this.options = options;
  }

  load(store: Store): void | Promise<void> {
    store.assign(this.options.flags);
  }
}
