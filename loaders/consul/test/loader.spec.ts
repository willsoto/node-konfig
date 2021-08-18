import * as Konfig from "@willsoto/node-konfig-core";
import { FileLoader } from "@willsoto/node-konfig-file";
import { expect } from "chai";
import * as consul from "consul";
import * as path from "path";
import * as sinon from "sinon";
import { ConsulLoader, ConsulLoaderOptions } from "../src";

describe("ConsulLoader", function () {
  async function makeConsulClient(): Promise<void> {
    const client = consul({
      promisify: true,
    });

    await client.kv.set(
      "database",
      JSON.stringify({
        host: "rds.foo.bar",
      }),
    );
  }

  it("should load secrets from the given vault", async function () {
    await makeConsulClient();
    const store = await makeStore({
      keys: [
        {
          key: "database",
          parser: new Konfig.JSONParser(),
        },
      ],
    });

    expect(store.toJSON()).to.eql({
      database: {
        host: "rds.foo.bar",
      },
    });
  });

  it("should apply a prefix if provided", async function () {
    await makeConsulClient();
    const store = await makeStore({
      keys: [
        {
          key: "database",
          prefix: "app_",
          parser: new Konfig.JSONParser(),
        },
      ],
    });

    expect(store.toJSON()).to.eql({
      app_database: {
        host: "rds.foo.bar",
      },
    });
  });

  it("should apply a replacer if provided", async function () {
    await makeConsulClient();
    const store = await makeStore({
      keys: [
        {
          key: "database",
          parser: new Konfig.JSONParser(),
          replacer(key: string) {
            return key.toUpperCase();
          },
        },
      ],
    });

    expect(store.toJSON()).to.eql({
      DATABASE: {
        host: "rds.foo.bar",
      },
    });
  });

  it("should apply a prefix and replacer (in the correct order)", async function () {
    await makeConsulClient();
    const store = await makeStore({
      keys: [
        {
          key: "database",
          parser: new Konfig.JSONParser(),
          prefix: "app_",
          replacer(key: string) {
            return key.toUpperCase();
          },
        },
      ],
    });

    expect(store.toJSON()).to.eql({
      APP_DATABASE: {
        host: "rds.foo.bar",
      },
    });
  });

  it("should merge secrets from the loader with secrets loaded from other locations", async function () {
    await makeConsulClient();
    const fileLoader = new FileLoader({
      files: [
        {
          path: path.resolve(__dirname, "configs", "config.json"),
          parser: new Konfig.JSONParser(),
        },
      ],
    });

    const store = await makeStore(
      {
        keys: [
          {
            key: "database",
            parser: new Konfig.JSONParser(),
          },
        ],
      },
      [fileLoader],
    );

    expect(store.toJSON()).to.eql({
      name: "foo",
      database: {
        host: "rds.foo.bar",
      },
    });
  });

  it("should respect the maxRetries option", async function () {
    await makeConsulClient();
    const store = new Konfig.Store();
    const loader = new ConsulLoader({
      maxRetries: 3,
      retryDelay: 50,
      keys: [
        {
          key: "non-existent/value",
        },
      ],
    });
    sinon.spy(loader, "process");

    store.registerLoader(loader);

    await expect(store.init()).to.eventually.be.rejectedWith(
      /non-existent\/value/,
    );
    // Initial call + the 3 retries
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(loader.process).to.have.callCount(4);
  });

  it("should respect the stopOnFailure option", async function () {
    await makeConsulClient();
    const store = await makeStore({
      stopOnFailure: false,
      keys: [
        {
          key: "non-existent/value",
        },
        {
          key: "database",
          parser: new Konfig.JSONParser(),
        },
      ],
    });

    expect(store.toJSON()).to.eql({
      database: {
        host: "rds.foo.bar",
      },
    });
  });
});

async function makeStore(
  options: ConsulLoaderOptions,
  loaders: Konfig.Loader[] = [],
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  loaders.forEach((loader) => store.registerLoader(loader));

  // Make sure vault gets loaded last so it "wins" any conflicts
  store.registerLoader(new ConsulLoader(options));

  await store.init();

  return store;
}
