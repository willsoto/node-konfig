import * as meow from "meow";
import { Store } from "../store";
import { Loader, LoaderOptions } from "./base";

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
