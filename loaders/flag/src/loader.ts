import { Loader, LoaderOptions, Store } from "@willsoto/node-konfig-core";
import meow, { AnyFlags, Options, Result } from "meow";

export interface FlagLoaderOptions extends LoaderOptions {
  cliOptions: Options<AnyFlags>;
}

export class FlagLoader extends Loader {
  #cli: Result<AnyFlags>;

  readonly options: FlagLoaderOptions;

  name = "flag";

  constructor(options: FlagLoaderOptions) {
    super(options);

    this.options = options;
    this.#cli = meow({
      ...options.cliOptions,
      importMeta: import.meta,
    });
  }

  load(store: Store): void | Promise<void> {
    Object.entries(this.#cli.flags).forEach((flag) => {
      const [option, value] = flag;

      store.set(option, value);
    });
  }
}
