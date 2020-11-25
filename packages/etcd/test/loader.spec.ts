/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as Konfig from "@willsoto/node-konfig-core";
import { expect } from "chai";
import { Etcd3 } from "etcd3";
import sinon from "sinon";
import { EtcdLoader, EtcdLoaderOptions } from "../src";

describe("EtcdLoader", function () {
  let client: Etcd3;

  before(async function () {
    client = new Etcd3();

    await client.put("database").value(
      JSON.stringify({
        host: "rds.foo.bar",
      }),
    );
    await client.put("appName").value("my-app");
  });

  it("can load secrets using the given accessor", async function () {
    const store = await makeStore({
      keys: [
        {
          accessor: "database",
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

  it("merges secrets from vault with secret loaded from other locations", async function () {
    const valueLoader = new Konfig.ValueLoader({
      values: {
        name: "foo",
      },
    });

    const store = await makeStore(
      {
        keys: [
          {
            accessor: "database",
            parser: new Konfig.JSONParser(),
          },
        ],
      },
      [valueLoader],
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
    const loader = new EtcdLoader({
      maxRetries: 3,
      retryDelay: 50,
      keys: [
        {
          accessor: "non-existent",
          parser: new Konfig.JSONParser(),
        },
      ],
    });
    sinon.spy(loader, "execute");

    store.registerLoader(loader);

    await expect(store.init()).to.eventually.be.rejectedWith(/non-existent/);
    // Initial call + the 3 retries
    expect(loader.execute).to.have.callCount(4);
  });

  it("respects the stopOnFailure option", async function () {
    const store = await makeStore({
      stopOnFailure: false,
      keys: [
        {
          accessor: "non-existent",
          parser: new Konfig.JSONParser(),
        },
        {
          accessor: "database",
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
  options: EtcdLoaderOptions,
  loaders: Konfig.Loader[] = [],
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  loaders.forEach((loader) => store.registerLoader(loader));

  // Make sure vault gets loaded last so it "wins" any conflicts
  store.registerLoader(new EtcdLoader(options));

  await store.init();

  return store;
}
