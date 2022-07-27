import * as Konfig from "@willsoto/node-konfig-core";
import { FileLoader } from "@willsoto/node-konfig-file";
import test from "ava";
import * as vault from "node-vault";
import * as path from "path";
import * as sinon from "sinon";
import { VaultLoader, VaultLoaderOptions } from "../src";

test("should load secrets from the given vault", async function (t) {
  t.plan(1);

  await makeVaultClient();
  const store = await makeStore({
    secrets: [
      {
        key: "secret/data/database",
      },
    ],
  });

  t.deepEqual(store.toJSON(), {
    database: {
      host: "rds.foo.bar",
    },
  });
});

test("should apply a prefix if provided", async function (t) {
  t.plan(1);

  await makeVaultClient();
  const store = await makeStore({
    secrets: [
      {
        key: "secret/data/database",
        prefix: "app_",
      },
    ],
  });

  t.deepEqual(store.toJSON(), {
    app_database: {
      host: "rds.foo.bar",
    },
  });
});

test("should apply a replacer if provided", async function (t) {
  t.plan(1);

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

  t.deepEqual(store.toJSON(), {
    DATABASE: {
      host: "rds.foo.bar",
    },
  });
});

test("should apply a prefix and replacer (in the correct order)", async function (t) {
  t.plan(1);

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

  t.deepEqual(store.toJSON(), {
    APP_DATABASE: {
      host: "rds.foo.bar",
    },
  });
});

test("should merge secrets from vault with secret loaded from other locations", async function (t) {
  t.plan(1);

  await makeVaultClient();
  const fileLoader = new FileLoader({
    files: [
      {
        path: path.resolve(__dirname, "configs", "config.json"),
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

  t.deepEqual(store.toJSON(), {
    name: "foo",
    database: {
      host: "rds.foo.bar",
    },
  });
});

test("should respect the maxRetries option", async function (t) {
  t.plan(2);

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
  sinon.spy(loader, "processSecrets");

  store.registerLoader(loader);

  await t.throwsAsync(store.init(), {
    message: /Status 404/,
  });
  // Initial call + the 3 retries
  t.is((loader.processSecrets as sinon.SinonSpy).callCount, 4);
});

test("should respect the stopOnFailure option", async function (t) {
  t.plan(1);

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

  t.deepEqual(store.toJSON(), {
    database: {
      host: "rds.foo.bar",
    },
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
