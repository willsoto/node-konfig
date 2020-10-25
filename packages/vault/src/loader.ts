/**
 * The node-vault client has _really_ bad typings so we need to disable
 * these rules to reduce noise in this file
 */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Loader, Store } from "@willsoto/node-konfig-core";
import * as NodeVault from "node-vault";

interface Secret {
  key: string;
  prefix?: string;
  replacer?: (key: string) => string;
}

export interface VaultLoaderOptions {
  secrets: Secret[];
  client: NodeVault.client;
}

export class VaultLoader implements Loader {
  readonly options: VaultLoaderOptions;
  readonly client: NodeVault.client;

  name = "vault";

  constructor(options: VaultLoaderOptions) {
    this.options = options;
    this.client = options.client;
  }

  async load(store: Store): Promise<void> {
    for (const secret of this.options.secrets) {
      const response = await this.client.read(secret.key);
      const { data } = response.data;

      Object.entries(data).forEach(([key, value]) => {
        if (secret.prefix) {
          key = `${secret.prefix}${key}`;
        }

        if (secret.replacer) {
          key = secret.replacer(key);
        }

        store.set(key, value);
      });
    }
  }
}
