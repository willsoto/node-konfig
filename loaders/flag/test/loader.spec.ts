import * as Konfig from "@willsoto/node-konfig-core";
import { describe, test, expect } from "bun:test";
import { FlagLoader, FlagLoaderOptions } from "../src/index.js";

describe("FlagLoader", () => {
  test("should assign the provided flags/options to the store", async function () {
    const store = await makeStore({
      cliOptions: {
        argv: ["--environment", "production"],
        flags: {
          environment: {
            shortFlag: "env",
            default: "development",
          },
        },
      },
    });

    expect(store.toJSON()).toEqual({
      environment: "production",
    });
  });

  test("should convert flags to camelCase", async function () {
    const store = await makeStore({
      cliOptions: {
        argv: ["--app-name", "my-app"],
        flags: {
          environment: {
            shortFlag: "env",
            default: "development",
          },
          appName: {
            default: "default",
          },
        },
      },
    });

    expect(store.toJSON()).toEqual({
      environment: "development",
      appName: "my-app",
    });
  });
});

async function makeStore(options: FlagLoaderOptions): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new FlagLoader(options));

  await store.init();

  return store;
}
