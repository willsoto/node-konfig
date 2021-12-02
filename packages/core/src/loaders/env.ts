import { ValueNotFoundError } from "../errors";
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

  async load(store: Store): Promise<void> {
    const values = this.options.envVars.map((envVar) => {
      if (this.maxRetries > 0) {
        return this.retryPolicy.execute(() => {
          return this.processEnvVar(store, envVar);
        });
      }

      return this.processEnvVar(store, envVar);
    });

    try {
      await Promise.all(values);
    } catch (error) {
      if (this.stopOnFailure) {
        throw error;
      }
    }
  }

  private processEnvVar(store: Store, envVar: EnvVar): Promise<void> {
    return new Promise((resolve, reject) => {
      const { accessor, envVarName, arraySeparator } = envVar;
      const value = process.env[envVarName];

      if (!value) {
        reject(new ValueNotFoundError());
        return;
      }

      store.set(accessor, this.processValue(value, arraySeparator));
      resolve();
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
