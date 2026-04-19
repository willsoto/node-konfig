import { dirname } from "@node-konfig/internal";
import * as Konfig from "@willsoto/node-konfig-core";
import { FileLoader } from "@willsoto/node-konfig-file";
import { describe, expect, spyOn, test } from "bun:test";
import vault from "node-vault";
import path from "node:path";
import { VaultLoader, VaultLoaderOptions } from "../src/index.js";

describe("VaultLoader", () => {
  test("should load secrets from the given vault", async function () {
    await makeVaultClient();
    const store = await makeStore({
      secrets: [
        {
          key: "secret/data/database",
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      database: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should apply a prefix if provided", async function () {
    await makeVaultClient();
    const store = await makeStore({
      secrets: [
        {
          key: "secret/data/database",
          prefix: "app_",
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      app_database: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should apply a replacer if provided", async function () {
    await makeVaultClient();
    const store = await makeStore({
      secrets: [
        {
          key: "secret/data/database",
          replacer(key: string) {
            return key.toUpperCase();
          },
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      DATABASE: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should apply a prefix and replacer (in the correct order)", async function () {
    await makeVaultClient();
    const store = await makeStore({
      secrets: [
        {
          key: "secret/data/database",
          prefix: "app_",
          replacer(key: string) {
            return key.toUpperCase();
          },
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      APP_DATABASE: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should merge secrets from vault with secret loaded from other locations", async function () {
    await makeVaultClient();
    const fileLoader = new FileLoader({
      files: [
        {
          path: path.resolve(dirname(import.meta), "configs", "config.json"),
          parser: new Konfig.JSONParser(),
        },
      ],
    });

    const store = await makeStore(
      {
        secrets: [
          {
            key: "secret/data/database",
          },
        ],
      },
      [fileLoader],
    );

    expect(store.toJSON()).toEqual({
      name: "foo",
      database: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should respect the maxRetries option", async function () {
    await makeVaultClient();
    const store = new Konfig.Store();
    const loader = new VaultLoader({
      maxRetries: 3,
      retryDelay: 50,
      secrets: [
        {
          key: "secret/data/non-existent",
        },
      ],
      vaultOptions: {
        token: "development",
      },
    });
    const spy = spyOn(loader, "processSecrets");

    store.registerLoader(loader);

    try {
      await store.init();
    } catch (error) {
      expect((error as Error).message).toMatch(/Status 404/);
    }
    // Initial call + the 3 retries
    expect(spy).toHaveBeenCalledTimes(4);
  });

  test("should respect the stopOnFailure option", async function () {
    await makeVaultClient();
    const store = await makeStore({
      stopOnFailure: false,
      secrets: [
        {
          key: "secret/data/non-existent",
        },
        {
          key: "secret/data/database",
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      database: {
        host: "rds.foo.bar",
      },
    });
  });
});

async function makeVaultClient(data?: unknown): Promise<void> {
  if (!data) {
    data = {
      database: {
        host: "rds.foo.bar",
      },
    };
  }
  const client = vault({ token: "development" });

  await client.write("secret/data/database", {
    data,
  });
}

async function makeStore(
  options: VaultLoaderOptions,
  loaders: Konfig.Loader[] = [],
): Promise<Konfig.Store> {
  const store = new Konfig.Store({
    loaders,
  });

  // Make sure vault gets loaded last so it "wins" any conflicts
  store.registerLoader(
    new VaultLoader({
      ...options,
      vaultOptions: {
        ...options.vaultOptions,
        token: "development",
      },
    }),
  );

  await store.init();

  return store;
}
