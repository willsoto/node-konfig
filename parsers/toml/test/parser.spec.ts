import * as Konfig from "@willsoto/node-konfig-core";
import { FileLoader, FileLoaderOptions } from "@willsoto/node-konfig-file";
import { expect } from "chai";
import * as path from "path";
import * as sinon from "sinon";
import { TOMLParser } from "../src";

describe("FileLoader with TOMLParser", function () {
  let fixtureDir: string;

  before(function () {
    fixtureDir = path.resolve(__dirname, "configs");
  });

  it("can load multiple configs and merge their results", async function () {
    const parser = new TOMLParser();
    const store = await makeStore({
      files: [
        {
          path: path.join(fixtureDir, "config.toml"),
          parser,
        },
        {
          path: path.join(fixtureDir, "config2.toml"),
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

  it("respects the stopOnFailure option (true)", function () {
    const parser = new TOMLParser();
    const options: FileLoaderOptions = {
      files: [
        {
          path: path.join(fixtureDir, "non-existent.toml"),
          parser,
        },
      ],
    };

    return expect(makeStore(options)).to.eventually.be.rejectedWith("ENOENT");
  });

  it("respects the stopOnFailure option (false)", async function () {
    const parser = new TOMLParser();
    const options: FileLoaderOptions = {
      stopOnFailure: false,
      files: [
        {
          path: path.join(fixtureDir, "non-existent.toml"),
          parser,
        },
        {
          path: path.join(fixtureDir, "config2.toml"),
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

  it("respects the maxRetries option", async function () {
    const parser = new TOMLParser();
    const options: FileLoaderOptions = {
      maxRetries: 3,
      retryDelay: 100,
      files: [
        {
          path: path.join(fixtureDir, "non-existent.toml"),
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
