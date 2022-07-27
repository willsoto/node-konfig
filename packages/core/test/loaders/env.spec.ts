import test from "ava";
import * as Konfig from "../../src";
import { ValueNotFoundError } from "../../src";

test.before(function () {
  process.env.PORT = "5000";
  process.env.NAME = "my-app";
  process.env.HOSTS = "localhost:1234,localhost:5678";
});

test.after(function () {
  delete process.env.PORT;
  delete process.env.NAME;
  delete process.env.HOSTS;
});

test.serial("EnvLoader should load the specified env vars", async function (t) {
  t.plan(1);

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

  t.deepEqual(store.toJSON(), {
    port: "5000",
    name: "my-app",
  });
});

test.serial(
  "EnvLoader should convert 'array-like' values into actual array",
  async function (t) {
    t.plan(1);

    const store = await makeStore({
      envVars: [
        {
          accessor: "hosts",
          envVarName: "HOSTS",
          arraySeparator: ",",
        },
      ],
    });

    t.deepEqual(store.get("hosts"), ["localhost:1234", "localhost:5678"]);
  },
);

test.serial(
  "EnvLoader should not error if the var is not present in the environment and stopOnFailure is disabled",
  async function (t) {
    t.plan(1);

    const store = await makeStore({
      stopOnFailure: false,
      envVars: [
        {
          accessor: "notAThing",
          envVarName: "NOT_A_THING",
        },
      ],
    });

    t.deepEqual(store.toJSON(), {});
  },
);

test.serial(
  "EnvLoader should respect the maxRetries setting",
  async function (t) {
    t.plan(1);

    await t.throwsAsync(
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
      {
        instanceOf: ValueNotFoundError,
      },
    );
  },
);

async function makeStore(
  options: Konfig.EnvLoaderOptions,
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new Konfig.EnvLoader(options));

  await store.init();

  return store;
}
