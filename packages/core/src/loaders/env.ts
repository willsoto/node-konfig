import { Store } from "../store";
import { Loader, LoaderOptions } from "./base";

interface EnvVar {
  accessor: string;
  envVarName: string;
  arraySeparator?: string;
}

export interface EnvLoaderOptions extends LoaderOptions {
  envVars: EnvVar[];
}

export class EnvLoader extends Loader {
  readonly options: EnvLoaderOptions;

  name = "env";

  constructor(options: EnvLoaderOptions) {
    super(options);

    this.options = options;
  }

  load(store: Store): void {
    this.options.envVars.forEach((envVar) => {
      const { accessor, envVarName, arraySeparator } = envVar;
      const value = process.env[envVarName];

      // TODO: throw if value not found
      if (value) {
        store.set(accessor, this.processValue(value, arraySeparator));
      }
    });
  }

  private processValue(
    value: string,
    arraySeparator?: string,
  ): string | string[] {
    if (arraySeparator && value.includes(arraySeparator)) {
      return value.split(arraySeparator);
    }

    return value;
  }
}
