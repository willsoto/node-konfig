import { describe, test, expect } from "bun:test";
import * as Konfig from "../src/index.js";

describe("Store groups", () => {
  test("should define new groups and access their values", async () => {
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

    expect(store.group("redis").get("host")).toBe("localhost");
  });

  test("should define new groups with their own loaders", async () => {
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

    expect(store.group("redis").toJSON()).toEqual({
      host: "localhost",
      port: 6379,
    });
  });

  test("should accept store options when creating groups", async () => {
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

    expect(store.group("redis").toJSON()).toEqual({
      host: "localhost",
      port: 6379,
    });
  });

  test("should correctly serialize groups within a store", async () => {
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

    expect(store.toJSON()).toEqual({
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

  test("should access values via #get even through groups", async () => {
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

    expect(store.get("redis.host")).toBe("localhost");
    expect(store.get("redis.port")).toBe(6379);
  });

  test("should #set values through groups", async () => {
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

    expect(store.get("database.user")).toBe("postgres");
    expect(store.get("database.queryParams.ssl")).toBe(true);
  });

  test("should initialize all groups within a store at any depth", async () => {
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

    expect(store.get("database")).toEqual({
      host: "localhost",
      port: 5432,
      user: "development",
      password: "development",
      queryParams: {
        ssl: false,
      },
    });
    expect(store.get("database.queryParams")).toEqual({
      ssl: false,
    });
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
