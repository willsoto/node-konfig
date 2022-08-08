import test from "ava";
import * as Konfig from "../../src/index.js";

test("ValueLoader should assign the provides values onto the store", async function (t) {
  t.plan(1);

  const store = await makeStore({
    values: {
      name: "bar",
      database: {
        host: "localhost",
      },
    },
  });

  t.deepEqual(store.toJSON(), {
    name: "bar",
    database: {
      host: "localhost",
    },
  });
});

async function makeStore(
  options: Konfig.ValueLoaderOptions,
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new Konfig.ValueLoader(options));

  await store.init();

  return store;
}
