import { dirname } from "@node-konfig/internal";
import * as Konfig from "@willsoto/node-konfig-core";
import { describe, expect, spyOn, test } from "bun:test";
import path from "node:path";
import { FileLoader, FileLoaderOptions } from "../src/index.js";

describe("FileLoader", () => {
  test("should load multiple configs and merge their results", async function () {
    const parser = new Konfig.JSONParser();
    const store = await makeStore({
      files: [
        {
          path: getPathToFixture("config.json"),
          parser,
        },
        {
          path: getPathToFixture("config2.json"),
          parser,
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      // "bar" should win out here since it was loaded last
      name: "bar",
      database: {
        host: "localhost",
      },
    });
  });

  test("should respect the stopOnFailure option (true)", async function () {
    const parser = new Konfig.JSONParser();
    const options: FileLoaderOptions = {
      files: [
        {
          path: getPathToFixture("non-existent.json"),
          parser,
        },
      ],
    };

    expect(makeStore(options)).rejects.toThrow(/ENOENT/);
  });

  test("should respect the stopOnFailure option (false)", async function () {
    const parser = new Konfig.JSONParser();
    const options: FileLoaderOptions = {
      stopOnFailure: false,
      files: [
        {
          path: getPathToFixture("non-existent.json"),
          parser,
        },
        {
          path: getPathToFixture("config2.json"),
          parser,
        },
      ],
    };
    const store = await makeStore(options);

    expect(store.toJSON()).toEqual({
      // bar is the only value that was loaded successfully
      name: "bar",
    });
  });

  test("should respect the maxRetries option", async function () {
    const parser = new Konfig.JSONParser();
    const options: FileLoaderOptions = {
      maxRetries: 3,
      retryDelay: 100,
      files: [
        {
          path: getPathToFixture("non-existent.json"),
          parser,
        },
      ],
    };
    const store = new Konfig.Store();

    const loader = new FileLoader(options);
    const spy = spyOn(loader, "processFiles");

    store.registerLoader(loader);

    try {
      await store.init();
    } catch (error) {
      expect((error as Error).message).toMatch(/ENOENT/);
    }
    // Initial call + the 3 retries
    expect(spy).toHaveBeenCalledTimes(4);
  });
});

function getPathToFixture(fixture: string): string {
  return path.resolve(dirname(import.meta), "configs", fixture);
}

async function makeStore(fileLoaderOptions: FileLoaderOptions): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new FileLoader(fileLoaderOptions));

  await store.init();

  return store;
}
