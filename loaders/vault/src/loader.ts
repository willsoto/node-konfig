// The node-vault client has _really_ bad typings so we need to disable
// these rules to reduce noise in this file
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Loader, LoaderOptions, Store } from "@willsoto/node-konfig-core";
import * as vault from "node-vault";

interface Secret {
  key: string;
  prefix?: string;
  replacer?: (key: string) => string;
}

export interface VaultLoaderOptions extends LoaderOptions {
  secrets: Secret[];
  vaultOptions?: vault.VaultOptions;
}

export class VaultLoader extends Loader {
  readonly options: VaultLoaderOptions;
  readonly client: vault.client;

  name = "vault";

  constructor(options: VaultLoaderOptions) {
    super(options);

    this.options = options;
    this.client = vault(options.vaultOptions);
  }

  async load(store: Store): Promise<void> {
    if (this.maxRetries > 0) {
      return this.retryPolicy.execute(() => this.processSecrets(store));
    }

    return this.processSecrets(store);
  }

  async processSecrets(store: Store): Promise<void> {
    for (const secret of this.options.secrets) {
      try {
        const response = await this.client.read(secret.key);
        const { data } = response.data;

        Object.entries(data).forEach(([key, value]) => {
          this.postLoad(store, secret, key, value);
        });
      } catch (error) {
        if (this.stopOnFailure) {
          throw error;
        }
      }
    }
  }

  private postLoad(store: Store, secret: Secret, key: string, value: unknown) {
    if (secret.prefix) {
      key = `${secret.prefix}${key}`;
    }

    if (secret.replacer) {
      key = secret.replacer(key);
    }

    store.set(key, value);
  }
}
