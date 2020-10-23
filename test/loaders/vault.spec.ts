/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { expect } from "chai";
import vault from "node-vault";
import path from "path";
import * as Konfig from "../../src";
import { VaultLoader, VaultLoaderOptions } from "../../src/vault";

describe("VaultLoader", function () {
  let client: vault.client;

  before(async function () {
    client = vault();
    client.token = "development";

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
      client,
    });

    expect(store.value()).to.eql({
      database: {
        host: "rds.foo.bar",
      },
    });
  });

  it("merges secrets from vault with secret loaded from other locations", async function () {
    const fileLoader = new Konfig.FileLoader({
      files: [
        {
          path: path.resolve(__dirname, "..", "configs", "config.json"),
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
        client,
      },
      [fileLoader],
    );

    expect(store.value()).to.eql({
      name: "foo",
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
  const store = new Konfig.Store();

  loaders.forEach((loader) => store.registerLoader(loader));

  // Make sure vault gets loaded last so it "wins" any conflicts
  store.registerLoader(new VaultLoader(options));

  await store.init();

  return store;
}
