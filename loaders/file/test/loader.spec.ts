import * as Konfig from "@willsoto/node-konfig-core";
import test from "ava";
import * as path from "path";
import * as sinon from "sinon";
import { FileLoader, FileLoaderOptions } from "../src";

test("should load multiple configs and merge their results", async function (t) {
  t.plan(1);

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

  t.deepEqual(store.toJSON(), {
    // "bar" should win out here since it was loaded last
    name: "bar",
    database: {
      host: "localhost",
    },
  });
});

test("should respect the stopOnFailure option (true)", async function (t) {
  t.plan(1);

  const parser = new Konfig.JSONParser();
  const options: FileLoaderOptions = {
    files: [
      {
        path: getPathToFixture("non-existent.json"),
        parser,
      },
    ],
  };

  await t.throwsAsync(makeStore(options), {
    message: /ENOENT/,
    instanceOf: Error,
  });
});

test("should respect the stopOnFailure option (false)", async function (t) {
  t.plan(1);

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

  t.deepEqual(store.toJSON(), {
    // bar is the only value that was loaded successfully
    name: "bar",
  });
});

test("should respect the maxRetries option", async function (t) {
  t.plan(2);

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
  sinon.spy(loader, "processFiles");

  store.registerLoader(loader);

  await t.throwsAsync(store.init(), {
    message: /ENOENT/,
    instanceOf: Error,
  });
  // Initial call + the 3 retries
  t.is((loader.processFiles as sinon.SinonSpy).callCount, 4);
});

function getPathToFixture(fixture: string): string {
  return path.resolve(__dirname, "configs", fixture);
}

async function makeStore(
  fileLoaderOptions: FileLoaderOptions,
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new FileLoader(fileLoaderOptions));

  await store.init();

  return store;
}
