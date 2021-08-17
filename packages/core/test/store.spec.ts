import { expect } from "chai";
import * as Konfig from "../src";
import { NoValueForKeyError } from "../src";

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

  it("can register several loaders at once", async function () {
    const store = new Konfig.Store();

    store.registerLoaders(
      new Konfig.ValueLoader({
        values: {
          name: "app",
        },
      }),
      new Konfig.ValueLoader({
        values: {
          database: {
            host: "localhost",
            port: 5432,
          },
        },
      }),
    );

    await store.init();

    expect(store.toJSON()).to.eql({
      name: "app",
      database: {
        host: "localhost",
        port: 5432,
      },
    });
  });

  it("allows loaders to be registered via the contrustor", async function () {
    const store = new Konfig.Store({
      loaders: [
        new Konfig.ValueLoader({
          values: {
            name: "app",
          },
        }),
        new Konfig.ValueLoader({
          values: {
            database: {
              host: "localhost",
              port: 5432,
            },
          },
        }),
      ],
    });

    await store.init();

    expect(store.toJSON()).to.eql({
      name: "app",
      database: {
        host: "localhost",
        port: 5432,
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

  it("can assign values in bulk while retaining any existing groups", async function () {
    const store = new Konfig.Store();

    store.registerLoader(
      new Konfig.ValueLoader({
        values: {
          name: "my-app",
        },
      }),
    );

    store.group("database").registerLoader(
      new Konfig.ValueLoader({
        values: {
          host: "localhost",
          port: 5432,
        },
      }),
    );

    store.group("redis").registerLoader(
      new Konfig.ValueLoader({
        values: {
          host: "localhost",
          port: 6379,
        },
      }),
    );

    await store.init();

    store.assign({
      database: {
        host: "rds",
        port: 5432,
      },
    });

    expect(store["config"]["database"]).to.be.instanceOf(Konfig.Store);
    expect(store["config"]["redis"]).to.be.instanceOf(Konfig.Store);

    expect(store.get("database")).to.eql({
      host: "rds",
      port: 5432,
    });
    expect(store.toJSON()).to.eql({
      name: "my-app",
      database: {
        host: "rds",
        port: 5432,
      },
      redis: {
        host: "localhost",
        port: 6379,
      },
    });
  });

  describe("#getOrThrow", function () {
    it("raises an error if the retrieved value is null", async function () {
      const store = new Konfig.Store();

      store.registerLoader(
        new Konfig.ValueLoader({
          values: {
            foo: null,
          },
        }),
      );
      await store.init();

      expect(() => store.getOrThrow("foo")).to.throw(NoValueForKeyError);
    });

    it("raises an error if the retrieved value is undefined", async function () {
      const store = new Konfig.Store();

      store.registerLoader(
        new Konfig.ValueLoader({
          values: {},
        }),
      );
      await store.init();

      expect(() => store.getOrThrow("foo")).to.throw(NoValueForKeyError);
    });

    it("returns the value if it's not null or undefined", async function () {
      const store = new Konfig.Store();

      store.registerLoader(
        new Konfig.ValueLoader({
          values: {
            name: "foo",
          },
        }),
      );
      await store.init();

      expect(store.getOrThrow("name")).to.eql("foo");
    });
  });
});

async function makeStore(): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoaders(
    new Konfig.ValueLoader({
      values: {
        name: "foo",
        database: {
          host: "localhost",
        },
      },
    }),
    new Konfig.ValueLoader({
      values: {
        name: "bar",
      },
    }),
  );

  await store.init();

  return store;
}
