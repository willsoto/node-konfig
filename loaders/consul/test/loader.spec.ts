import { dirname } from "@node-konfig/internal";
import * as Konfig from "@willsoto/node-konfig-core";
import { FileLoader } from "@willsoto/node-konfig-file";
import { describe, expect, test } from "bun:test";
import path from "node:path";
import sinon from "sinon";
import { ConsulLoader, ConsulLoaderOptions } from "../src/index.js";

describe("ConsulLoader", () => {
  test("should load secrets from the given vault", async () => {
    await seedConsulData();
    const store = await makeStore({
      keys: [
        {
          key: "database",
          parser: new Konfig.JSONParser(),
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      database: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should apply a prefix if provided", async () => {
    await seedConsulData();
    const store = await makeStore({
      keys: [
        {
          key: "database",
          prefix: "app_",
          parser: new Konfig.JSONParser(),
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      app_database: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should apply a replacer if provided", async () => {
    await seedConsulData();
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

    expect(store.toJSON()).toEqual({
      DATABASE: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should apply a prefix and replacer (in the correct order)", async () => {
    await seedConsulData();
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

    expect(store.toJSON()).toEqual({
      APP_DATABASE: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should merge secrets from the loader with secrets loaded from other locations", async () => {
    await seedConsulData();
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

    expect(store.toJSON()).toEqual({
      name: "foo",
      database: {
        host: "rds.foo.bar",
      },
    });
  });

  test("should respect the maxRetries option", async () => {
    await seedConsulData();
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

    try {
      await store.init();
    } catch (error) {
      expect((error as Error).message).toBe("Key not found: non-existent/value");
    }
    // Initial call + the 3 retries
    expect((loader.process as sinon.SinonSpy).callCount).toBe(4);
  });

  test("should respect the stopOnFailure option", async () => {
    await seedConsulData();
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

    expect(store.toJSON()).toEqual({
      database: {
        host: "rds.foo.bar",
      },
    });
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

async function seedConsulData(): Promise<void> {
  await fetch("http://127.0.0.1:8500/v1/kv/database", {
    method: "PUT",
    body: JSON.stringify({ host: "rds.foo.bar" }),
  });
}
