import { expect } from "chai";
import path from "path";
import * as Konfig from "../../src";

describe("FileLoader", function () {
  let fixtureDir: string;

  before(function () {
    fixtureDir = path.resolve(__dirname, "..", "configs");
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

    expect(store.value()).to.eql({
      // "bar" should win out here since it was loaded last
      name: "bar",
      database: {
        host: "localhost",
      },
    });
  });

  it("respects the stop on failure policy (defaults to true)", function () {
    const parser = new Konfig.JSONParser();
    const options: Konfig.FileLoaderOptions = {
      files: [
        {
          path: path.join(fixtureDir, "non-existent.json"),
          parser,
        },
      ],
    };

    return expect(makeStore(options)).to.eventually.be.rejectedWith("ENOENT");
  });

  it("respects the stop on failure policy", async function () {
    const parser = new Konfig.JSONParser();
    const options: Konfig.FileLoaderOptions = {
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

    expect(store.value()).to.eql({
      // bar is the only value that was loaded successfully
      name: "bar",
    });
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
