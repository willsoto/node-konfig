import * as Konfig from "@willsoto/node-konfig-core";
import { FileLoader, FileLoaderOptions } from "@willsoto/node-konfig-file";
import { expect } from "chai";
import * as path from "path";
import * as sinon from "sinon";
import { YAMLParser } from "../src";

describe("FileLoader with YAMLParser", function () {
  function getPathToFixture(fixture: string): string {
    return path.resolve(__dirname, "configs", fixture);
  }

  it("should load multiple configs and merge their results", async function () {
    const parser = new YAMLParser();
    const store = await makeStore({
      files: [
        {
          path: getPathToFixture("config.yaml"),
          parser,
        },
        {
          path: getPathToFixture("config2.yaml"),
          parser,
        },
      ],
    });

    expect(store.toJSON()).to.eql({
      // "bar" should win out here since it was loaded last
      name: "bar",
      database: {
        host: "localhost",
      },
    });
  });

  it("should respect the stopOnFailure option (true)", function () {
    const parser = new YAMLParser();
    const options: FileLoaderOptions = {
      files: [
        {
          path: getPathToFixture("non-existent.yaml"),
          parser,
        },
      ],
    };

    return expect(makeStore(options)).to.eventually.be.rejectedWith("ENOENT");
  });

  it("should respect the stopOnFailure option (false)", async function () {
    const parser = new YAMLParser();
    const options: FileLoaderOptions = {
      stopOnFailure: false,
      files: [
        {
          path: getPathToFixture("non-existent.yaml"),
          parser,
        },
        {
          path: getPathToFixture("config2.yaml"),
          parser,
        },
      ],
    };
    const store = await makeStore(options);

    expect(store.toJSON()).to.eql({
      // bar is the only value that was loaded successfully
      name: "bar",
    });
  });

  it("should respect the maxRetries option", async function () {
    const parser = new YAMLParser();
    const options: FileLoaderOptions = {
      maxRetries: 3,
      retryDelay: 100,
      files: [
        {
          path: getPathToFixture("non-existent.yaml"),
          parser,
        },
      ],
    };
    const store = new Konfig.Store();

    const loader = new FileLoader(options);
    sinon.spy(loader, "processFiles");

    store.registerLoader(loader);

    await expect(store.init()).to.eventually.be.rejectedWith("ENOENT");
    // Initial call + the 3 retries
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(loader.processFiles).to.have.callCount(4);
  });
});

async function makeStore(
  fileLoaderOptions: FileLoaderOptions,
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new FileLoader(fileLoaderOptions));

  await store.init();

  return store;
}
