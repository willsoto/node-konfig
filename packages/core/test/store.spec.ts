import test from "ava";
import * as Konfig from "../src";
import { NoValueForKeyError } from "../src";

test("Store should load multiple configs and merge their results", async function (t) {
  t.plan(1);

  const store = await makeStore();

  t.deepEqual(store.toJSON(), {
    // "bar" should win out here since it was loaded last
    name: "bar",
    database: {
      host: "localhost",
    },
  });
});

test("Store should register several loaders at once", async function (t) {
  t.plan(1);

  const store = new Konfig.Store();

  store.registerLoaders(
    new Konfig.ValueLoader({
      values: {
        name: "app",
      },
    }),
    new Konfig.ValueLoader({
      values: {
        database: {
          host: "localhost",
          port: 5432,
        },
      },
    }),
  );

  await store.init();

  t.deepEqual(store.toJSON(), {
    name: "app",
    database: {
      host: "localhost",
      port: 5432,
    },
  });
});

test("Store should allow loaders to be registered via the contrustor", async function (t) {
  t.plan(1);

  const store = new Konfig.Store({
    loaders: [
      new Konfig.ValueLoader({
        values: {
          name: "app",
        },
      }),
      new Konfig.ValueLoader({
        values: {
          database: {
            host: "localhost",
            port: 5432,
          },
        },
      }),
    ],
  });

  await store.init();

  t.deepEqual(store.toJSON(), {
    name: "app",
    database: {
      host: "localhost",
      port: 5432,
    },
  });
});

test("Store should fetch individual values from the store", async function (t) {
  t.plan(2);

  const store = await makeStore();

  t.is(store.get("name"), "bar");
  t.is(store.get("database.host"), "localhost");
});

test("Store should set values to the store", async function (t) {
  t.plan(1);

  const store = await makeStore();

  store.set("name", "baz");

  t.is(store.get("name"), "baz");
});

test("Store should assign values in bulk while retaining any existing groups", async function (t) {
  t.plan(4);

  const store = new Konfig.Store();

  store.registerLoader(
    new Konfig.ValueLoader({
      values: {
        name: "my-app",
      },
    }),
  );

  store.group("database").registerLoader(
    new Konfig.ValueLoader({
      values: {
        host: "localhost",
        port: 5432,
      },
    }),
  );

  store.group("redis").registerLoader(
    new Konfig.ValueLoader({
      values: {
        host: "localhost",
        port: 6379,
      },
    }),
  );

  await store.init();

  store.assign({
    database: {
      host: "rds",
      port: 5432,
    },
  });

  t.true(store["config"]["database"] instanceof Konfig.Store);
  t.true(store["config"]["redis"] instanceof Konfig.Store);

  t.deepEqual(store.get("database"), {
    host: "rds",
    port: 5432,
  });
  t.deepEqual(store.toJSON(), {
    name: "my-app",
    database: {
      host: "rds",
      port: 5432,
    },
    redis: {
      host: "localhost",
      port: 6379,
    },
  });
});

test("getOrThrow should raise an error if the retrieved value is null", async function (t) {
  t.plan(1);

  const store = new Konfig.Store();

  store.registerLoader(
    new Konfig.ValueLoader({
      values: {
        foo: null,
      },
    }),
  );
  await store.init();

  t.throws(() => store.getOrThrow("foo"), {
    instanceOf: NoValueForKeyError,
  });
});

test("getOrThrow should raise an error if the retrieved value is undefined", async function (t) {
  t.plan(1);

  const store = new Konfig.Store();

  store.registerLoader(
    new Konfig.ValueLoader({
      values: {},
    }),
  );
  await store.init();

  t.throws(() => store.getOrThrow("foo"), {
    instanceOf: NoValueForKeyError,
  });
});

test("getOrThrow should return the value if it's not null or undefined", async function (t) {
  t.plan(1);

  const store = new Konfig.Store();

  store.registerLoader(
    new Konfig.ValueLoader({
      values: {
        name: "foo",
      },
    }),
  );
  await store.init();

  t.is(store.getOrThrow("name"), "foo");
});

async function makeStore(): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoaders(
    new Konfig.ValueLoader({
      values: {
        name: "foo",
        database: {
          host: "localhost",
        },
      },
    }),
    new Konfig.ValueLoader({
      values: {
        name: "bar",
      },
    }),
  );

  await store.init();

  return store;
}
