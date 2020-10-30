import { expect } from "chai";
import path from "path";
import * as Konfig from "../../src";

describe("FileLoader", function () {
  it("can load multiple configs and merge their results", async function () {
    const store = await makeStore();

    expect(store.value()).to.eql({
      // "bar" should win out here since it was loaded last
      name: "bar",
      database: {
        host: "localhost",
      },
    });
  });

  it("can fetch individual values from the store", async function () {
    const store = await makeStore();

    expect(store.get("name")).to.eql("bar");
    expect(store.get("database.host")).to.eql("localhost");
  });

  it("can set values to the store", async function () {
    const store = await makeStore();

    store.set("name", "baz");

    expect(store.get("name")).to.eql("baz");
  });
});

async function makeStore(): Promise<Konfig.Store> {
  const store = new Konfig.Store();
  const parser = new Konfig.JSONParser();

  store.registerLoader(
    new Konfig.FileLoader({
      files: [
        {
          path: path.resolve(__dirname, "..", "configs", "config.json"),
          parser,
        },
        {
          path: path.resolve(__dirname, "..", "configs", "config2.json"),
          parser,
        },
      ],
    }),
  );

  await store.init();

  return store;
}
