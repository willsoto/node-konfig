import { expect } from "chai";
import * as Konfig from "../../src";

describe("ValueLoader", function () {
  it("assigns the provides values onto the store", async function () {
    const store = await makeStore({
      values: {
        name: "bar",
        database: {
          host: "localhost",
        },
      },
    });

    expect(store.toJSON()).to.eql({
      name: "bar",
      database: {
        host: "localhost",
      },
    });
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
