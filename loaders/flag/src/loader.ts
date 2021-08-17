import { Loader, LoaderOptions, Store } from "@willsoto/node-konfig-core";
import * as meow from "meow";

export interface FlagLoaderOptions extends LoaderOptions {
  cliOptions: meow.Options<meow.AnyFlags>;
}

export class FlagLoader extends Loader {
  #cli: meow.Result<meow.AnyFlags>;

  readonly options: FlagLoaderOptions;

  name = "flag";

  constructor(options: FlagLoaderOptions) {
    super(options);

    this.options = options;
    this.#cli = meow(options.cliOptions);
  }

  load(store: Store): void | Promise<void> {
    Object.entries(this.#cli.flags).forEach((flag) => {
      const [option, value] = flag;

      store.set(option, value);
    });
  }
}
