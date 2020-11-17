import { expect } from "chai";
import path from "path";
import * as Konfig from "../src";

describe("Store", function () {
  it("can load multiple configs and merge their results", async function () {
    const store = await makeStore();

    expect(store.toJSON()).to.eql({
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

  describe("Groups", function () {
    it("can define new groups and access their values", async function () {
      const store = await makeStore();
      store.group("redis").assign({
        host: "localhost",
        port: 6379,
      });

      expect(store.group("redis").get("host")).to.eql("localhost");
    });

    it("can define new groups with their own loaders", async function () {
      const store = await makeStore();
      const group = store.group("redis");

      group.registerLoader(
        new Konfig.FileLoader({
          files: [
            {
              path: path.join(__dirname, "configs", "config3.json"),
              parser: new Konfig.JSONParser(),
            },
          ],
        }),
      );

      await group.init();

      expect(store.group("redis").toJSON()).to.eql({
        host: "localhost",
        port: 6379,
      });
    });

    it("correctly serializes groups within a store", async function () {
      const store = await makeStore();
      const parser = new Konfig.JSONParser();

      store.registerLoader(
        new Konfig.FileLoader({
          files: [
            {
              path: path.join(__dirname, "configs", "config.json"),
              parser,
            },
          ],
        }),
      );

      await store.init();

      const group = store.group("redis");

      group.registerLoader(
        new Konfig.FileLoader({
          files: [
            {
              path: path.join(__dirname, "configs", "config3.json"),
              parser,
            },
          ],
        }),
      );

      await group.init();

      expect(store.toJSON()).to.eql({
        name: "foo",
        database: {
          host: "localhost",
        },
        redis: {
          host: "localhost",
          port: 6379,
        },
      });
    });

    it("can access values via #get even through groups", async function () {
      const store = await makeStore();
      const parser = new Konfig.JSONParser();

      store.registerLoader(
        new Konfig.FileLoader({
          files: [
            {
              path: path.join(__dirname, "configs", "config.json"),
              parser,
            },
          ],
        }),
      );

      await store.init();

      const group = store.group("redis");

      group.registerLoader(
        new Konfig.FileLoader({
          files: [
            {
              path: path.join(__dirname, "configs", "config3.json"),
              parser,
            },
          ],
        }),
      );

      await group.init();

      expect(store.get("redis.host")).to.eql("localhost");
      expect(store.get("redis.port")).to.eql(6379);
    });

    it("can #set values through groups", async function () {
      const store = new Konfig.Store();

      store.registerLoader(
        new Konfig.ValueLoader({
          values: {
            name: "foo",
          },
        }),
      );

      store.group("database").registerLoader(
        new Konfig.ValueLoader({
          values: {
            host: "localhost",
            port: 5432,
            user: "development",
            password: "development",
            queryParams: {
              ssl: false,
            },
          },
        }),
      );

      await store.init();

      store.set("database.user", "postgres");
      store.set("database.queryParams.ssl", true);

      expect(store.get("database.user")).to.eql("postgres");
      expect(store.get("database.queryParams.ssl")).to.eql(true);
    });
  });
});

async function makeStore(): Promise<Konfig.Store> {
  const store = new Konfig.Store();
  const parser = new Konfig.JSONParser();

  store.registerLoader(
    new Konfig.FileLoader({
      files: [
        {
          path: path.join(__dirname, "configs", "config.json"),
          parser,
        },
        {
          path: path.join(__dirname, "configs", "config2.json"),
          parser,
        },
      ],
    }),
  );

  await store.init();

  return store;
}
