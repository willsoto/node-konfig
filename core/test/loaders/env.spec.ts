import { describe, test, expect, beforeAll, afterAll } from "bun:test";
import { ValueNotFoundError } from "../../src/errors.js";
import * as Konfig from "../../src/index.js";

describe("EnvLoader", () => {
  beforeAll(() => {
    process.env.PORT = "5000";
    process.env.NAME = "my-app";
    process.env.HOSTS = "localhost:1234,localhost:5678";
  });

  afterAll(() => {
    delete process.env.PORT;
    delete process.env.NAME;
    delete process.env.HOSTS;
  });

  test("should load the specified env vars", async () => {
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

    expect(store.toJSON()).toEqual({
      port: "5000",
      name: "my-app",
    });
  });

  test("should convert 'array-like' values into actual array", async () => {
    const store = await makeStore({
      envVars: [
        {
          accessor: "hosts",
          envVarName: "HOSTS",
          arraySeparator: ",",
        },
      ],
    });

    expect(store.get("hosts")).toEqual(["localhost:1234", "localhost:5678"]);
  });

  test("should not error if the var is not present in the environment and stopOnFailure is disabled", async () => {
    const store = await makeStore({
      stopOnFailure: false,
      envVars: [
        {
          accessor: "notAThing",
          envVarName: "NOT_A_THING",
        },
      ],
    });

    expect(store.toJSON()).toEqual({});
  });

  test("should respect the maxRetries setting", async () => {
    expect(
      makeStore({
        stopOnFailure: true,
        maxRetries: 3,
        envVars: [
          {
            accessor: "notAThing",
            envVarName: "NOT_A_THING",
          },
        ],
      }),
    ).rejects.toThrow(ValueNotFoundError);
  });
});

async function makeStore(options: Konfig.EnvLoaderOptions): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new Konfig.EnvLoader(options));

  await store.init();

  return store;
}
