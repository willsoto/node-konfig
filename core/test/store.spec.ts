import { describe, test, expect } from "bun:test";
import { NoValueForKeyError } from "../src/errors.js";
import * as Konfig from "../src/index.js";

describe("Store", () => {
  test("should load multiple configs and merge their results", async () => {
    const store = await makeStore();

    expect(store.toJSON()).toEqual({
      // "bar" should win out here since it was loaded last
      name: "bar",
      database: {
        host: "localhost",
      },
    });
  });

  test("should register several loaders at once", async () => {
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

    expect(store.toJSON()).toEqual({
      name: "app",
      database: {
        host: "localhost",
        port: 5432,
      },
    });
  });

  test("should allow loaders to be registered via the contrustor", async () => {
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

    expect(store.toJSON()).toEqual({
      name: "app",
      database: {
        host: "localhost",
        port: 5432,
      },
    });
  });

  test("should fetch individual values from the store", async () => {
    const store = await makeStore();

    expect(store.get("name")).toBe("bar");
    expect(store.get("database.host")).toBe("localhost");
  });

  test("should set values to the store", async () => {
    const store = await makeStore();

    store.set("name", "baz");

    expect(store.get("name")).toBe("baz");
  });

  test("should assign values in bulk while retaining any existing groups", async () => {
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

    expect(store["config"]["database"] instanceof Konfig.Store).toBe(true);
    expect(store["config"]["redis"] instanceof Konfig.Store).toBe(true);

    expect(store.get("database")).toEqual({
      host: "rds",
      port: 5432,
    });
    expect(store.toJSON()).toEqual({
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

  describe("getOrThrow", () => {
    test("should raise an error if the retrieved value is null", async () => {
      const store = new Konfig.Store();

      store.registerLoader(
        new Konfig.ValueLoader({
          values: {
            foo: null,
          },
        }),
      );
      await store.init();

      expect(() => store.getOrThrow("foo")).toThrow(NoValueForKeyError);
    });

    test("should raise an error if the retrieved value is undefined", async () => {
      const store = new Konfig.Store();

      store.registerLoader(
        new Konfig.ValueLoader({
          values: {},
        }),
      );
      await store.init();

      expect(() => store.getOrThrow("foo")).toThrow(NoValueForKeyError);
    });

    test("should return the value if it's not null or undefined", async () => {
      const store = new Konfig.Store();

      store.registerLoader(
        new Konfig.ValueLoader({
          values: {
            name: "foo",
          },
        }),
      );
      await store.init();

      expect(store.getOrThrow("name")).toBe("foo");
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
