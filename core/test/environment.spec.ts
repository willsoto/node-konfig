import test from "ava";
import * as Konfig from "../src/index.js";

test.serial(
  "Loaders by environment should allow environment loaders to be registered via constructor",
  async function (t) {
    t.plan(1);

    const store = new Konfig.Store({
      loadersByEnvironment: {
        test: [
          new Konfig.ValueLoader({
            values: {
              name: "app",
            },
          }),
        ],
      },
    });
    await store.init();

    t.is(store.get("name"), "app");
  },
);

test.serial(
  "Loaders by environment should allow environment loaders to be registered after construction",
  async function (t) {
    t.plan(1);

    const store = new Konfig.Store();

    store.registerLoadersByEnvironment({
      test: [
        new Konfig.ValueLoader({
          values: {
            name: "app",
          },
        }),
      ],
    });
    await store.init();

    t.is(store.get("name"), "app");
  },
);

test.serial(
  "Loaders by environment should merge default loaders with environment loaders with environment loaders being last",
  async function (t) {
    t.plan(1);

    const store = new Konfig.Store({
      loaders: [
        new Konfig.ValueLoader({
          values: {
            name: "app-default",
          },
        }),
      ],
      loadersByEnvironment: {
        test: [
          new Konfig.ValueLoader({
            values: {
              name: "app-development",
            },
          }),
        ],
      },
    });
    await store.init();

    t.is(store.get("name"), "app-development");
  },
);

test.serial(
  "Loaders by environment should respect the NODE_KONFIG_ENV environment variable first, if set",
  async function (t) {
    t.plan(1);

    process.env.NODE_KONFIG_ENV = "staging";

    const store = new Konfig.Store({
      loadersByEnvironment: {
        development: [
          new Konfig.ValueLoader({
            values: {
              name: "app-development",
            },
          }),
        ],
        staging: [
          new Konfig.ValueLoader({
            values: {
              name: "app-staging",
            },
          }),
        ],
      },
    });
    await store.init();

    t.is(store.get("name"), "app-staging");

    delete process.env.NODE_KONFIG_ENV;
  },
);

test.serial(
  "Loaders by environment should use NODE_ENV if NODE_KONFIG_ENV is not set",
  async function (t) {
    t.plan(1);

    const initial = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    const store = new Konfig.Store({
      loadersByEnvironment: {
        development: [
          new Konfig.ValueLoader({
            values: {
              name: "app-development",
            },
          }),
        ],
        staging: [
          new Konfig.ValueLoader({
            values: {
              name: "app-staging",
            },
          }),
        ],
        production: [
          new Konfig.ValueLoader({
            values: {
              name: "app-production",
            },
          }),
        ],
      },
    });
    await store.init();

    t.is(store.get("name"), "app-production");

    process.env.NODE_ENV = initial;
  },
);

test.serial(
  "Loaders by environment should default to development if NODE_ENV and NODE_KONFIG_ENV are not set",
  async function (t) {
    t.plan(1);

    const initial = process.env.NODE_ENV;
    delete process.env.NODE_ENV;

    const store = new Konfig.Store({
      loadersByEnvironment: {
        development: [
          new Konfig.ValueLoader({
            values: {
              name: "app-development",
            },
          }),
        ],
        staging: [
          new Konfig.ValueLoader({
            values: {
              name: "app-staging",
            },
          }),
        ],
        production: [
          new Konfig.ValueLoader({
            values: {
              name: "app-production",
            },
          }),
        ],
      },
    });
    await store.init();

    t.is(store.get("name"), "app-development");

    process.env.NODE_ENV = initial;
  },
);
