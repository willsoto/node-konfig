import { Argv } from "yargs";
import { Store } from "../store";
import { Loader, LoaderOptions } from "./base";

export interface FlagLoaderOptions extends LoaderOptions {
  flags: Argv["argv"];
}

export class FlagLoader extends Loader {
  readonly options: FlagLoaderOptions;

  name = "flag";

  constructor(options: FlagLoaderOptions) {
    super(options);

    this.options = options;
  }

  load(store: Store): void | Promise<void> {
    // Don't assign the `bin` or any unmapped args
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _, $0, ...rest } = this.options.flags;

    store.assign(rest);
  }
}
