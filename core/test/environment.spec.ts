import { describe, test, expect, afterEach } from "bun:test";
import * as Konfig from "../src/index.js";

describe("Loaders by environment", () => {
  afterEach(() => {
    delete process.env.NODE_KONFIG_ENV;
  });

  test("should allow environment loaders to be registered via constructor", async () => {
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

    expect(store.get("name")).toBe("app");
  });

  test("should allow environment loaders to be registered after construction", async () => {
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

    expect(store.get("name")).toBe("app");
  });

  test("should merge default loaders with environment loaders with environment loaders being last", async () => {
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

    expect(store.get("name")).toBe("app-development");
  });

  test("should respect the NODE_KONFIG_ENV environment variable first, if set", async () => {
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

    expect(store.get("name")).toBe("app-staging");
  });

  test("should use NODE_ENV if NODE_KONFIG_ENV is not set", async () => {
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

    expect(store.get("name")).toBe("app-production");

    process.env.NODE_ENV = initial;
  });

  test("should default to development if NODE_ENV and NODE_KONFIG_ENV are not set", async () => {
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

    expect(store.get("name")).toBe("app-development");

    process.env.NODE_ENV = initial;
  });
});
