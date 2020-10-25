import { Store } from "../store";
import { Loader } from "./interface";

export interface EnvLoaderOptions {
  vars?: string[];
  regExp?: string | RegExp;
  prefix?: string;
  replacer?: (key: string) => string;
  arraySeparator?: string;
}

/**
 * Based on Konfig Env Loader.
 *
 *{@link https://github.com/lalamove/konfig/tree/master/loader/klenv|Prior art}
 */
export class EnvLoader implements Loader {
  readonly options: EnvLoaderOptions;

  name = "env";

  constructor(options: EnvLoaderOptions = {}) {
    this.options = options;
  }

  load(store: Store): void {
    const config: Record<string, unknown> = {};
    const { vars = [], regExp } = this.options;

    if (vars.length > 0) {
      Object.entries(process.env).forEach(([key, value]) => {
        if (vars.includes(key)) {
          this.set(config, key, value);
        }
      });
    } else if (regExp) {
      const regex = regExp instanceof RegExp ? regExp : new RegExp(regExp);

      Object.entries(process.env).forEach(([key, value]) => {
        if (regex.test(key)) {
          this.set(config, key, value);
        }
      });
    } else {
      Object.entries(process.env).forEach(([key, value]) => {
        this.set(config, key, value);
      });
    }

    store.assign(config);
  }

  private set(config: Record<string, unknown>, key: string, value?: string) {
    config[this.processKey(key)] = value ? this.processValue(value) : null;
  }

  private processKey(key: string): string {
    const { prefix, replacer } = this.options;

    if (prefix) {
      key = `${prefix}${key}`;
    }

    if (replacer) {
      key = replacer(key);
    }

    return key;
  }

  private processValue(value: string): string | string[] {
    const { arraySeparator } = this.options;

    if (arraySeparator && value.includes(arraySeparator)) {
      return value.split(arraySeparator);
    }

    return value;
  }
}
