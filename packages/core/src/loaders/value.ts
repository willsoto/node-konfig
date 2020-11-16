import { Store } from "../store";
import { Loader, LoaderOptions } from "./base";

export interface ValueLoaderOptions extends LoaderOptions {
  values: Record<string, unknown>;
}

export class ValueLoader extends Loader {
  readonly options: ValueLoaderOptions;

  name = "value";

  constructor(options: ValueLoaderOptions) {
    super(options);

    this.options = options;
  }

  load(store: Store): void {
    Object.keys(this.options.values).forEach((key) => {
      store.set(key, this.options.values[key]);
    });
  }
}
