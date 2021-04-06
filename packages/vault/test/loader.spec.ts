import * as Konfig from "@willsoto/node-konfig-core";
import { expect } from "chai";
import * as vault from "node-vault";
import * as path from "path";
import * as sinon from "sinon";
import { VaultLoader, VaultLoaderOptions } from "../src";

describe("VaultLoader", function () {
  let client: vault.client;

  before(async function () {
    client = vault({ token: "development" });

    await client.write("secret/data/database", {
      data: {
        database: {
          host: "rds.foo.bar",
        },
      },
    });
  });

  it("can load secrets from the given vault", async function () {
    const store = await makeStore({
      secrets: [
        {
          key: "secret/data/database",
        },
      ],
    });

    expect(store.toJSON()).to.eql({
      database: {
        host: "rds.foo.bar",
      },
    });
  });

  it("applies a prefix if provided", async function () {
    const store = await makeStore({
      secrets: [
        {
          key: "secret/data/database",
          prefix: "app_",
        },
      ],
    });

    expect(store.toJSON()).to.eql({
      app_database: {
        host: "rds.foo.bar",
      },
    });
  });

  it("applies a replacer if provided", async function () {
    const store = await makeStore({
      secrets: [
        {
          key: "secret/data/database",
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

  it("applies a prefix and replacer (in the correct order)", async function () {
    const store = await makeStore({
      secrets: [
        {
          key: "secret/data/database",
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

  it("merges secrets from vault with secret loaded from other locations", async function () {
    const fileLoader = new Konfig.FileLoader({
      files: [
        {
          path: path.resolve(__dirname, "configs", "config.json"),
          parser: new Konfig.JSONParser(),
        },
      ],
    });

    const store = await makeStore(
      {
        secrets: [
          {
            key: "secret/data/database",
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

  it("respects the maxRetries option", async function () {
    const store = new Konfig.Store();
    const loader = new VaultLoader({
      maxRetries: 3,
      retryDelay: 50,
      secrets: [
        {
          key: "secret/data/non-existent",
        },
      ],
      vaultOptions: {
        token: "development",
      },
    });
    sinon.spy(loader, "processSecrets");

    store.registerLoader(loader);

    await expect(store.init()).to.eventually.be.rejectedWith("Status 404");
    // Initial call + the 3 retries
    expect(loader.processSecrets).to.have.callCount(4);
  });

  it("respects the stopOnFailure option", async function () {
    const store = await makeStore({
      stopOnFailure: false,
      secrets: [
        {
          key: "secret/data/non-existent",
        },
        {
          key: "secret/data/database",
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
  options: VaultLoaderOptions,
  loaders: Konfig.Loader[] = [],
): Promise<Konfig.Store> {
  const store = new Konfig.Store({
    loaders,
  });

  // Make sure vault gets loaded last so it "wins" any conflicts
  store.registerLoader(
    new VaultLoader({
      ...options,
      vaultOptions: {
        ...options.vaultOptions,
        token: "development",
      },
    }),
  );

  await store.init();

  return store;
}
