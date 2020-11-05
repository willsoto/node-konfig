import { expect } from "chai";
import path from "path";
import sinon from "sinon";
import * as Konfig from "../../src";

describe("FileLoader with YAMLParser", function () {
  let fixtureDir: string;

  before(function () {
    fixtureDir = path.resolve(__dirname, "..", "configs");
  });

  it("can load multiple configs and merge their results", async function () {
    const parser = new Konfig.YAMLParser();
    const store = await makeStore({
      files: [
        {
          path: path.join(fixtureDir, "config.yaml"),
          parser,
        },
        {
          path: path.join(fixtureDir, "config2.yaml"),
          parser,
        },
      ],
    });

    expect(store.value()).to.eql({
      // "bar" should win out here since it was loaded last
      name: "bar",
      database: {
        host: "localhost",
      },
    });
  });

  it("respects the stopOnFailure option (true)", function () {
    const parser = new Konfig.YAMLParser();
    const options: Konfig.FileLoaderOptions = {
      files: [
        {
          path: path.join(fixtureDir, "non-existent.yaml"),
          parser,
        },
      ],
    };

    return expect(makeStore(options)).to.eventually.be.rejectedWith("ENOENT");
  });

  it("respects the stopOnFailure option (false)", async function () {
    const parser = new Konfig.YAMLParser();
    const options: Konfig.FileLoaderOptions = {
      stopOnFailure: false,
      files: [
        {
          path: path.join(fixtureDir, "non-existent.yaml"),
          parser,
        },
        {
          path: path.join(fixtureDir, "config2.yaml"),
          parser,
        },
      ],
    };
    const store = await makeStore(options);

    expect(store.value()).to.eql({
      // bar is the only value that was loaded successfully
      name: "bar",
    });
  });

  it("respects the maxRetries option", async function () {
    const parser = new Konfig.YAMLParser();
    const options: Konfig.FileLoaderOptions = {
      maxRetries: 3,
      retryDelay: 100,
      files: [
        {
          path: path.join(fixtureDir, "non-existent.yaml"),
          parser,
        },
      ],
    };
    const store = new Konfig.Store();

    const loader = new Konfig.FileLoader(options);
    sinon.spy(loader, "processFiles");

    store.registerLoader(loader);

    await expect(store.init()).to.eventually.be.rejectedWith("ENOENT");
    // Initial call + the 3 retries
    expect(loader.processFiles).to.have.callCount(4);
  });
});

async function makeStore(
  fileLoaderOptions: Konfig.FileLoaderOptions,
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new Konfig.FileLoader(fileLoaderOptions));

  await store.init();

  return store;
}
