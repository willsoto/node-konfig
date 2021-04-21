import { expect } from "chai";
import * as Konfig from "../src";

describe("Loaders by environment", function () {
  it("allows environment loaders to be registered via constructor", async function () {
    const store = new Konfig.Store({
      loadersByEnvironment: {
        development: [
          new Konfig.ValueLoader({
            values: {
              name: "app",
            },
          }),
        ],
      },
    });
    await store.init();

    expect(store.get("name")).to.eql("app");
  });

  it("allows environment loaders to be registered after construction", async function () {
    const store = new Konfig.Store();

    store.registerLoadersByEnvironment({
      development: [
        new Konfig.ValueLoader({
          values: {
            name: "app",
          },
        }),
      ],
    });
    await store.init();

    expect(store.get("name")).to.eql("app");
  });

  it("merges default loaders with environment loaders with environment loaders being last", async function () {
    const store = new Konfig.Store({
      loaders: [
        new Konfig.ValueLoader({
          values: {
            name: "app-default",
          },
        }),
      ],
      loadersByEnvironment: {
        development: [
          new Konfig.ValueLoader({
            values: {
              name: "app-development",
            },
          }),
        ],
      },
    });
    await store.init();

    expect(store.get("name")).to.eql("app-development");
  });

  it("respects the NODE_KONFIG_ENV environment variable first, if set", async function () {
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

    expect(store.get("name")).to.eql("app-staging");

    delete process.env.NODE_KONFIG_ENV;
  });

  it("uses NODE_ENV if NODE_KONFIG_ENV is not set", async function () {
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

    expect(store.get("name")).to.eql("app-production");

    process.env.NODE_ENV = initial;
  });

  it("defaults to development if NODE_ENV and NODE_KONFIG_ENV are not set", async function () {
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

    expect(store.get("name")).to.eql("app-development");

    process.env.NODE_ENV = initial;
  });
});
