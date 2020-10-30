import { Argv } from "yargs";
import { Store } from "../store";
import { Loader } from "./interface";

export interface FlagLoaderOptions {
  flags: Argv["argv"];
}

export class FlagLoader implements Loader {
  readonly options: FlagLoaderOptions;

  name = "flag";

  constructor(options: FlagLoaderOptions) {
    this.options = options;
  }

  load(store: Store): void | Promise<void> {
    // Don't assign the `bin` or any unmapped args
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _, $0, ...rest } = this.options.flags;

    store.assign(rest);
  }
}
