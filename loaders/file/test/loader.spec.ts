import * as Konfig from "@willsoto/node-konfig-core";
import { expect } from "chai";
import * as path from "path";
import * as sinon from "sinon";
import { FileLoader, FileLoaderOptions } from "../src";

describe("FileLoader", function () {
  let fixtureDir: string;

  before(function () {
    fixtureDir = path.resolve(__dirname, "configs");
  });

  it("can load multiple configs and merge their results", async function () {
    const parser = new Konfig.JSONParser();
    const store = await makeStore({
      files: [
        {
          path: path.join(fixtureDir, "config.json"),
          parser,
        },
        {
          path: path.join(fixtureDir, "config2.json"),
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
    const parser = new Konfig.JSONParser();
    const options: FileLoaderOptions = {
      files: [
        {
          path: path.join(fixtureDir, "non-existent.json"),
          parser,
        },
      ],
    };

    return expect(makeStore(options)).to.eventually.be.rejectedWith("ENOENT");
  });

  it("respects the stopOnFailure option (false)", async function () {
    const parser = new Konfig.JSONParser();
    const options: FileLoaderOptions = {
      stopOnFailure: false,
      files: [
        {
          path: path.join(fixtureDir, "non-existent.json"),
          parser,
        },
        {
          path: path.join(fixtureDir, "config2.json"),
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
    const parser = new Konfig.JSONParser();
    const options: FileLoaderOptions = {
      maxRetries: 3,
      retryDelay: 100,
      files: [
        {
          path: path.join(fixtureDir, "non-existent.json"),
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
