import * as Konfig from "@willsoto/node-konfig-core";
import { expect } from "chai";
import { FlagLoader, FlagLoaderOptions } from "../src";

describe("FlagLoader", function () {
  it("assigns the provided flags/options to the store", async function () {
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

    expect(store.toJSON()).to.eql({
      environment: "production",
    });
  });

  it("converts flags to camelCase", async function () {
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

    expect(store.toJSON()).to.eql({
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
