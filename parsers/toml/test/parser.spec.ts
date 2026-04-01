import { dirname } from "@node-konfig/internal";
import * as Konfig from "@willsoto/node-konfig-core";
import { FileLoader, FileLoaderOptions } from "@willsoto/node-konfig-file";
import { describe, test, expect } from "bun:test";
import path from "node:path";
import * as sinon from "sinon";
import { TOMLParser } from "../src/index.js";

describe("TOMLParser", () => {
  test("should load multiple configs and merge their results", async function () {
    const parser = new TOMLParser();
    const store = await makeStore({
      files: [
        {
          path: getPathToFixture("config.toml"),
          parser,
        },
        {
          path: getPathToFixture("config2.toml"),
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
    const parser = new TOMLParser();
    const options: FileLoaderOptions = {
      files: [
        {
          path: getPathToFixture("non-existent.toml"),
          parser,
        },
      ],
    };

    try {
      await makeStore(options);
    } catch (error) {
      expect((error as Error).message).toMatch(/ENOENT/);
    }
  });

  test("should respect the stopOnFailure option (false)", async function () {
    const parser = new TOMLParser();
    const options: FileLoaderOptions = {
      stopOnFailure: false,
      files: [
        {
          path: getPathToFixture("non-existent.toml"),
          parser,
        },
        {
          path: getPathToFixture("config2.toml"),
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
    const parser = new TOMLParser();
    const options: FileLoaderOptions = {
      maxRetries: 3,
      retryDelay: 100,
      files: [
        {
          path: getPathToFixture("non-existent.toml"),
          parser,
        },
      ],
    };
    const store = new Konfig.Store();

    const loader = new FileLoader(options);
    sinon.spy(loader, "processFiles");

    store.registerLoader(loader);

    try {
      await store.init();
    } catch (error) {
      expect((error as Error).message).toMatch(/ENOENT/);
    }
    // Initial call + the 3 retries
    expect((loader.processFiles as sinon.SinonSpy).callCount).toBe(4);
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
