import { expect } from "chai";
import * as Konfig from "../../src";

describe("EnvLoader", function () {
  // eslint-disable-next-line mocha/no-hooks
  before(function () {
    process.env.PORT = "5000";
    process.env.NAME = "my-app";
    process.env.HOSTS = "localhost:1234,localhost:5678";
  });

  // eslint-disable-next-line mocha/no-hooks
  after(function () {
    delete process.env.PORT;
    delete process.env.NAME;
    delete process.env.HOSTS;
  });

  it("should load the specified env vars", async function () {
    const store = await makeStore({
      envVars: [
        {
          accessor: "port",
          envVarName: "PORT",
        },
        {
          accessor: "name",
          envVarName: "NAME",
        },
      ],
    });

    expect(store.toJSON()).to.eql({
      port: "5000",
      name: "my-app",
    });
  });

  it("should convert 'array-like' values into actual array", async function () {
    const store = await makeStore({
      envVars: [
        {
          accessor: "hosts",
          envVarName: "HOSTS",
          arraySeparator: ",",
        },
      ],
    });

    expect(store.get("hosts")).to.eql(["localhost:1234", "localhost:5678"]);
  });

  it("should not error if the var is not present in the environment", async function () {
    const store = await makeStore({
      envVars: [
        {
          accessor: "notAThing",
          envVarName: "NOT_A_THING",
        },
      ],
    });

    expect(store.toJSON()).to.eql({});
  });
});

async function makeStore(
  options: Konfig.EnvLoaderOptions,
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new Konfig.EnvLoader(options));

  await store.init();

  return store;
}
