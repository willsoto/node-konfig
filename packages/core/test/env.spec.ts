import { expect } from "chai";
import _ from "lodash";
import * as Konfig from "../src";

describe("Env loader", function () {
  before(function () {
    process.env.PORT = "5000";
    process.env.NAME = "my-app";
    process.env.MY_APP_NAME = "my-app";
    process.env.HOSTS = "localhost:1234,localhost:5678";
  });

  after(function () {
    delete process.env.PORT;
    delete process.env.NAME;
    delete process.env.MY_APP_NAME;
    delete process.env.HOSTS;
  });

  it("loads all the environment variables when initialized with no options", async function () {
    const store = await makeStore();

    expect(store.value()).to.include({
      PORT: "5000",
      NAME: "my-app",
      MY_APP_NAME: "my-app",
      HOSTS: "localhost:1234,localhost:5678",
    });
  });

  it("loads the specified vars if provided", async function () {
    const store = await makeStore({
      vars: ["PORT", "NAME"],
    });

    expect(store.value()).to.eql({
      PORT: "5000",
      NAME: "my-app",
    });
  });

  it("can convert 'array-like' values into actual array", async function () {
    const store = await makeStore({
      vars: ["HOSTS"],
      arraySeparator: ",",
    });

    expect(store.get("HOSTS")).to.eql(["localhost:1234", "localhost:5678"]);
  });

  it("does not error if the var is not present in the environment", async function () {
    const store = await makeStore({
      vars: ["NOT_A_THING"],
    });

    expect(store.value()).to.eql({});
  });

  it("matches environment variables matching the given regexp (string)", async function () {
    const store = await makeStore({
      regExp: "^MY_APP",
    });

    expect(store.value()).to.eql({
      MY_APP_NAME: "my-app",
    });
  });

  it("matches environment variables matching the given regexp (RegExp)", async function () {
    const store = await makeStore({
      regExp: new RegExp(/^MY_APP/),
    });

    expect(store.value()).to.eql({
      MY_APP_NAME: "my-app",
    });
  });

  it("processes the keys with the given replacer function", async function () {
    const store = await makeStore({
      regExp: "^MY_APP",

      replacer(key: string) {
        return key.toLowerCase();
      },
    });

    expect(store.value()).to.eql({
      my_app_name: "my-app",
    });
  });

  it("applies the given prefix if provided and then applies the replacer", async function () {
    const store = await makeStore({
      prefix: "myApp",
      replacer(key: string) {
        return _.camelCase(key);
      },
      vars: ["PORT", "NAME"],
    });

    expect(store.value()).to.eql({
      myAppPort: "5000",
      myAppName: "my-app",
    });
  });
});

async function makeStore(
  options?: Konfig.EnvLoaderOptions,
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  store.registerLoader(new Konfig.EnvLoader(options));

  await store.init();

  return store;
}
