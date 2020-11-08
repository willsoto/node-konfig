import { expect } from "chai";
import { Argv } from "yargs";
import yargs from "yargs/yargs";
import * as Konfig from "../../src";

describe("FlagLoader", function () {
  let flags: Argv["argv"];

  it("assigns the provided flags/options to the store", async function () {
    flags = yargs(["--environment", "production"]).option("environment", {})
      .argv;

    const store = await makeStore(flags);

    expect(store.toJSON()).to.eql({
      environment: "production",
    });
  });

  it("assigns the provided options when using aliases", async function () {
    flags = yargs(["--environment", "production"]).option("environment", {
      alias: "env",
      default: "development",
    }).argv;

    const store = await makeStore(flags);

    expect(store.toJSON()).to.eql({
      env: "production",
      environment: "production",
    });
  });
});

async function makeStore(flags: Argv["argv"]): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(
    new Konfig.FlagLoader({
      flags,
    }),
  );

  await store.init();

  return store;
}
