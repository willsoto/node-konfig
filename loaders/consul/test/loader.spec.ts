import { dirname } from "@node-konfig/internal";
import * as Konfig from "@willsoto/node-konfig-core";
import { FileLoader } from "@willsoto/node-konfig-file";
import test from "ava";
import Consul from "consul";
import path from "node:path";
import sinon from "sinon";
import { ConsulLoader, ConsulLoaderOptions } from "../src/index.js";

test("should load secrets from the given vault", async function (t) {
  t.plan(1);

  await makeConsulClient();
  const store = await makeStore({
    keys: [
      {
        key: "database",
        parser: new Konfig.JSONParser(),
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

  await makeConsulClient();
  const store = await makeStore({
    keys: [
      {
        key: "database",
        prefix: "app_",
        parser: new Konfig.JSONParser(),
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

  await makeConsulClient();
  const store = await makeStore({
    keys: [
      {
        key: "database",
        parser: new Konfig.JSONParser(),
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

  await makeConsulClient();
  const store = await makeStore({
    keys: [
      {
        key: "database",
        parser: new Konfig.JSONParser(),
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

test("should merge secrets from the loader with secrets loaded from other locations", async function (t) {
  t.plan(1);

  await makeConsulClient();
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
      keys: [
        {
          key: "database",
          parser: new Konfig.JSONParser(),
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

  await makeConsulClient();
  const store = new Konfig.Store();
  const loader = new ConsulLoader({
    maxRetries: 3,
    retryDelay: 50,
    keys: [
      {
        key: "non-existent/value",
      },
    ],
  });
  sinon.spy(loader, "process");

  store.registerLoader(loader);

  await t.throwsAsync(store.init(), {
    message: "Key not found: non-existent/value",
  });
  // Initial call + the 3 retries
  t.is((loader.process as sinon.SinonSpy).callCount, 4);
});

test("should respect the stopOnFailure option", async function (t) {
  t.plan(1);

  await makeConsulClient();
  const store = await makeStore({
    stopOnFailure: false,
    keys: [
      {
        key: "non-existent/value",
      },
      {
        key: "database",
        parser: new Konfig.JSONParser(),
      },
    ],
  });

  t.deepEqual(store.toJSON(), {
    database: {
      host: "rds.foo.bar",
    },
  });
});

async function makeStore(
  options: ConsulLoaderOptions,
  loaders: Konfig.Loader[] = [],
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  loaders.forEach((loader) => store.registerLoader(loader));

  // Make sure vault gets loaded last so it "wins" any conflicts
  store.registerLoader(new ConsulLoader(options));

  await store.init();

  return store;
}

async function makeConsulClient(): Promise<void> {
  const client = new Consul({
    promisify: true,
  });

  await client.kv.set(
    "database",
    JSON.stringify({
      host: "rds.foo.bar",
    }),
  );
}
