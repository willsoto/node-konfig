import * as Konfig from "@willsoto/node-konfig-core";
import test from "ava";
import { Etcd3 } from "etcd3";
import * as sinon from "sinon";
import { EtcdLoader, EtcdLoaderOptions } from "../src/index.js";

test("should load secrets using the given accessor", async function (t) {
  t.plan(1);

  await makeEtcd3Client();
  const store = await makeStore({
    keys: [
      {
        accessor: "database",
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

test("should merge secrets from vault with secret loaded from other locations", async function (t) {
  t.plan(1);

  await makeEtcd3Client();
  const valueLoader = new Konfig.ValueLoader({
    values: {
      name: "foo",
    },
  });

  const store = await makeStore(
    {
      keys: [
        {
          accessor: "database",
          parser: new Konfig.JSONParser(),
        },
      ],
    },
    [valueLoader],
  );

  t.deepEqual(store.toJSON(), {
    name: "foo",
    database: {
      host: "rds.foo.bar",
    },
  });
});

test("should respect the maxRetries option", async function (t) {
  t.plan(3);

  await makeEtcd3Client();
  const store = new Konfig.Store();
  const loader = new EtcdLoader({
    maxRetries: 3,
    retryDelay: 50,
    keys: [
      {
        accessor: "non-existent",
        parser: new Konfig.JSONParser(),
      },
    ],
  });
  sinon.spy(loader, "execute");

  store.registerLoader(loader);

  const error = await t.throwsAsync(store.init());
  t.is(error?.message, "Key not found: non-existent");
  // Initial call + the 3 retries
  t.is((loader.execute as sinon.SinonSpy).callCount, 4);
});

test("should respect the stopOnFailure option", async function (t) {
  t.plan(1);

  await makeEtcd3Client();
  const store = await makeStore({
    stopOnFailure: false,
    keys: [
      {
        accessor: "non-existent",
        parser: new Konfig.JSONParser(),
      },
      {
        accessor: "database",
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

async function makeEtcd3Client(): Promise<void> {
  const client = new Etcd3();

  await client.put("database").value(
    JSON.stringify({
      host: "rds.foo.bar",
    }),
  );
  await client.put("appName").value("my-app");
}

async function makeStore(
  options: EtcdLoaderOptions,
  loaders: Konfig.Loader[] = [],
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  loaders.forEach((loader) => store.registerLoader(loader));

  // Make sure vault gets loaded last so it "wins" any conflicts
  store.registerLoader(new EtcdLoader(options));

  await store.init();

  return store;
}
