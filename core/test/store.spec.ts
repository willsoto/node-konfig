import { describe, test, expect } from "vitest";
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

  test("should return undefined when the path continues past a non-object value", () => {
    const store = new Konfig.Store();

    store.assign({ name: "my-app", port: 5432, nothing: null });

    expect(store.get("name.length")).toBeUndefined();
    expect(store.get("name.x.y")).toBeUndefined();
    expect(store.get("port.host")).toBeUndefined();
    expect(store.get("nothing.host")).toBeUndefined();
    expect(() => store.getOrThrow("port.host")).toThrow(NoValueForKeyError);
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

  test("should recursively merge plain objects when assigning", () => {
    const store = new Konfig.Store();
    const first = {
      name: "my-app",
      database: { host: "localhost", port: 5432, replicas: ["a", "b"] },
    };

    store.assign(first);
    store.assign({ database: { host: "db.internal", replicas: ["c"], pool: { max: 10 } } });
    store.assign({ database: { pool: { min: 1 } } });

    expect(store.toJSON()).toEqual({
      name: "my-app",
      database: {
        host: "db.internal",
        port: 5432,
        replicas: ["c"],
        pool: { max: 10, min: 1 },
      },
    });
    // Callers keep ownership of what they pass in.
    expect(first.database).toEqual({ host: "localhost", port: 5432, replicas: ["a", "b"] });
  });

  test("should retain groups nested under a plain object when assigning", () => {
    const store = new Konfig.Store();
    const group = store.group("services.database");

    group.assign({ host: "localhost", port: 5432 });
    store.assign({ services: { database: { host: "rds" }, cache: { host: "redis" } } });

    expect(store.group("services.database")).toBe(group);
    expect(store.get("services.database")).toEqual({ host: "rds", port: 5432 });
    expect(store.get("services.cache.host")).toBe("redis");
  });

  test("should replace rather than merge when either side is not a plain object", () => {
    const store = new Konfig.Store();

    store.assign({ database: { host: "localhost" }, cache: "redis://localhost" });
    store.assign({ database: null, cache: { host: "localhost" } });

    expect(store.toJSON()).toEqual({ database: null, cache: { host: "localhost" } });
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
