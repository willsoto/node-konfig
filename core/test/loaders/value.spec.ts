import { describe, test, expect } from "bun:test";
import * as Konfig from "../../src/index.js";

describe("ValueLoader", () => {
  test("should assign the provides values onto the store", async () => {
    const store = await makeStore({
      values: {
        name: "bar",
        database: {
          host: "localhost",
        },
      },
    });

    expect(store.toJSON()).toEqual({
      name: "bar",
      database: {
        host: "localhost",
      },
    });
  });
});

async function makeStore(options: Konfig.ValueLoaderOptions): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new Konfig.ValueLoader(options));

  await store.init();

  return store;
}
