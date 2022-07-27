import * as Konfig from "@willsoto/node-konfig-core";
import test from "ava";
import { FlagLoader, FlagLoaderOptions } from "../src";

test("should assign the provided flags/options to the store", async function (t) {
  t.plan(1);

  const store = await makeStore({
    cliOptions: {
      argv: ["--environment", "production"],
      flags: {
        environment: {
          alias: "env",
          default: "development",
        },
      },
    },
  });

  t.deepEqual(store.toJSON(), {
    environment: "production",
  });
});

test("should convert flags to camelCase", async function (t) {
  t.plan(1);

  const store = await makeStore({
    cliOptions: {
      argv: ["--app-name", "my-app"],
      flags: {
        environment: {
          alias: "env",
          default: "development",
        },
        appName: {
          default: "default",
        },
      },
    },
  });

  t.deepEqual(store.toJSON(), {
    environment: "development",
    appName: "my-app",
  });
});

async function makeStore(options: FlagLoaderOptions): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new FlagLoader(options));

  await store.init();

  return store;
}
