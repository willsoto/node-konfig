import test from "ava";
import * as Konfig from "../src/index.js";

test("Store groups should define new groups and access their values", async function (t) {
  t.plan(1);

  const store = new Konfig.Store();

  store.group("redis").registerLoader(
    new Konfig.ValueLoader({
      values: {
        host: "localhost",
        port: 6379,
      },
    }),
  );

  await store.init();

  t.is(store.group("redis").get("host"), "localhost");
});

test("Store groups should define new groups with their own loaders", async function (t) {
  t.plan(1);

  const store = await makeStore();
  const group = store.group("redis");

  group.registerLoader(
    new Konfig.ValueLoader({
      values: {
        host: "localhost",
        port: 6379,
      },
    }),
  );

  await group.init();

  t.deepEqual(store.group("redis").toJSON(), {
    host: "localhost",
    port: 6379,
  });
});

test("Store groups should accept store options when creating groups", async function (t) {
  t.plan(1);

  const store = await makeStore();
  const group = store.group("redis", {
    loaders: [
      new Konfig.ValueLoader({
        values: {
          host: "localhost",
          port: 6379,
        },
      }),
    ],
  });

  await group.init();

  t.deepEqual(store.group("redis").toJSON(), {
    host: "localhost",
    port: 6379,
  });
});

test("Store groups should correctly serialize groups within a store", async function (t) {
  t.plan(1);

  const store = await makeStore();

  store.registerLoader(
    new Konfig.ValueLoader({
      values: {
        name: "foo",
        database: {
          host: "localhost",
        },
      },
    }),
  );

  await store.init();

  const group = store.group("redis");

  group.registerLoader(
    new Konfig.ValueLoader({
      values: {
        host: "localhost",
        port: 6379,
      },
    }),
  );

  await group.init();

  t.deepEqual(store.toJSON(), {
    name: "foo",
    database: {
      host: "localhost",
    },
    redis: {
      host: "localhost",
      port: 6379,
    },
  });
});

test("Store groups should access values via #get even through groups", async function (t) {
  t.plan(2);

  const store = await makeStore();

  store.registerLoader(
    new Konfig.ValueLoader({
      values: {
        name: "foo",
        database: {
          host: "localhost",
        },
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

  t.is(store.get("redis.host"), "localhost");
  t.is(store.get("redis.port"), 6379);
});

test("Store groups should #set values through groups", async function (t) {
  t.plan(2);

  const store = new Konfig.Store();

  store.registerLoader(
    new Konfig.ValueLoader({
      values: {
        name: "foo",
      },
    }),
  );

  store.group("database").registerLoader(
    new Konfig.ValueLoader({
      values: {
        host: "localhost",
        port: 5432,
        user: "development",
        password: "development",
        queryParams: {
          ssl: false,
        },
      },
    }),
  );

  await store.init();

  store.set("database.user", "postgres");
  store.set("database.queryParams.ssl", true);

  t.is(store.get("database.user"), "postgres");
  t.is(store.get("database.queryParams.ssl"), true);
});

test("Store groups should initialize all groups within a store at any depth", async function (t) {
  t.plan(2);

  const store = new Konfig.Store();

  store.registerLoader(
    new Konfig.ValueLoader({
      values: {
        name: "foo",
      },
    }),
  );

  const databaseGroup = store.group("database").registerLoader(
    new Konfig.ValueLoader({
      values: {
        host: "localhost",
        port: 5432,
        user: "development",
        password: "development",
      },
    }),
  );

  databaseGroup.group("queryParams").registerLoader(
    new Konfig.ValueLoader({
      values: {
        ssl: false,
      },
    }),
  );

  await store.init();

  t.deepEqual(store.get("database"), {
    host: "localhost",
    port: 5432,
    user: "development",
    password: "development",
    queryParams: {
      ssl: false,
    },
  });
  t.deepEqual(store.get("database.queryParams"), {
    ssl: false,
  });
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
