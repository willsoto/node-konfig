/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as Konfig from "@willsoto/node-konfig-core";
import { expect } from "chai";
import nock from "nock";
import sinon from "sinon";
import { HttpLoader, HttpLoaderOptions } from "../src";

describe("HttpLoader", function () {
  let scope: nock.Scope;
  let prefixUrl: string;

  before(function () {
    prefixUrl = "https://internal.config.com";
    scope = nock(prefixUrl);
  });

  afterEach(function () {
    expect(scope.isDone()).to.eql(true);
    nock.cleanAll();
  });

  it("can load secrets from the given vault", async function () {
    scope.get("/config.json").reply(
      200,
      JSON.stringify({
        database: {
          host: "rds.foo.bar",
        },
      }),
    );

    const store = await makeStore({
      sources: [
        {
          url: `${prefixUrl}/config.json`,
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

  it("merges secrets from the loader with secrets loaded from other locations", async function () {
    scope.post("/config.json").reply(
      200,
      JSON.stringify({
        database: {
          host: "rds.foo.bar",
        },
      }),
    );

    const fileLoader = new Konfig.ValueLoader({
      values: {
        name: "foo",
      },
    });

    const store = await makeStore(
      {
        sources: [
          {
            url: `${prefixUrl}/config.json`,
            fetchOptions: {
              method: "POST",
            },
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

  it("respects the maxRetries option", async function () {
    scope.get("/config.json").reply(403, "Forbidden").persist();

    const store = new Konfig.Store();
    const loader = new HttpLoader({
      maxRetries: 3,
      sources: [
        {
          url: `${prefixUrl}/config.json`,
          parser: new Konfig.JSONParser(),
        },
      ],
    });
    sinon.spy(loader, "process");

    store.registerLoader(loader);

    await expect(store.init()).to.eventually.be.rejectedWith("Forbidden");
    // Initial call + the 3 retries
    expect(loader.process).to.have.callCount(4);
  });

  it("respects the stopOnFailure option", async function () {
    scope.get("/config.json").reply(
      200,
      JSON.stringify({
        database: {
          host: "rds.foo.bar",
        },
      }),
    );

    scope.get("/config-not-found.json").reply(404, "Not found");

    const store = await makeStore({
      stopOnFailure: false,
      sources: [
        {
          url: `${prefixUrl}/config-not-found.json`,
          parser: new Konfig.JSONParser(),
        },
        {
          url: `${prefixUrl}/config.json`,
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
  options: HttpLoaderOptions,
  loaders: Konfig.Loader[] = [],
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  loaders.forEach((loader) => store.registerLoader(loader));

  store.registerLoader(new HttpLoader(options));

  await store.init();

  return store;
}
