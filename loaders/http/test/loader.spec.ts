import * as Konfig from "@willsoto/node-konfig-core";
import anyTest, { TestFn } from "ava";
import nock from "nock";
import sinon from "sinon";
import { HttpLoader, HttpLoaderOptions } from "../src/index.js";

// These tests have to be run serially otherwise they consume each other's mocks.
// If we want to make them concurrent, each test should have its own file that it's
// fetching for config.

const test = anyTest as TestFn<{
  scope: nock.Scope;
}>;

const prefixUrl = "https://internal.config.com";

test.before((t) => {
  t.context.scope = nock(prefixUrl);
});

test.afterEach.always((t) => {
  t.true(nock.isDone());
  nock.cleanAll();
});

test.serial("should load secrets from the given vault", async function (t) {
  t.plan(1);

  t.context.scope.get("/config.json").reply(
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

  t.deepEqual(store.toJSON(), {
    database: {
      host: "rds.foo.bar",
    },
  });
});

test.serial(
  "should merge secrets from the loader with secrets loaded from other locations",
  async function (t) {
    t.plan(1);

    t.context.scope.post("/config.json").reply(
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

    t.deepEqual(store.toJSON(), {
      name: "foo",
      database: {
        host: "rds.foo.bar",
      },
    });
  },
);

test.serial("should respect the maxRetries option", async function (t) {
  t.plan(2);

  t.context.scope
    .get("/config.json")
    .replyWithError({
      message: "Forbidden",
      code: 403,
    })
    .persist();

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

  await t.throwsAsync(store.init(), {
    message: /Forbidden/,
  });
  // Initial call + the 3 retries
  t.is((loader.process as sinon.SinonSpy).callCount, 4);
});

test.serial("should respect the stopOnFailure option", async function (t) {
  t.plan(1);

  t.context.scope
    .get("/config.json")
    .reply(
      200,
      JSON.stringify({
        database: {
          host: "rds.foo.bar",
        },
      }),
    )
    .get("/config-not-found.json")
    .reply(404, "Not found");

  const parser = new Konfig.JSONParser();
  const store = await makeStore({
    stopOnFailure: false,
    maxRetries: 0,
    sources: [
      {
        url: `${prefixUrl}/config-not-found.json`,
        parser,
      },
      {
        url: `${prefixUrl}/config.json`,
        parser,
      },
    ],
  });

  t.deepEqual(store.toJSON(), {
    database: {
      host: "rds.foo.bar",
    },
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
