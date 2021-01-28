import { Test, TestingModule } from "@nestjs/testing";
import { Store, ValueLoader } from "@willsoto/node-konfig-core";
import { expect } from "chai";
import { NodeKonfigModule } from "../src";

describe("NestJS integration (#register)", function () {
  let testingModule: TestingModule;

  afterEach(function () {
    return testingModule.close();
  });

  it("registers the loader as Store if no name is provided", async function () {
    testingModule = await register({
      storeOptions: {
        loaders: [
          new ValueLoader({
            values: {
              foo: "bar",
            },
          }),
        ],
      },
    });
    const store = testingModule.get(Store);

    expect(store).to.be.ok;
    expect(store.get("foo")).to.eql("bar");
  });

  it("registers the injectable with the given name if provided", async function () {
    testingModule = await register({
      name: "node1",
      storeOptions: {
        loaders: [
          new ValueLoader({
            values: {
              foo: "bar",
            },
          }),
        ],
      },
    });
    const store = testingModule.get<Store>("node1");

    expect(store).to.be.ok;
    expect(store.get("foo")).to.eql("bar");
  });
});

function register(options: NodeKonfigModule): Promise<TestingModule> {
  return Test.createTestingModule({
    imports: [NodeKonfigModule.register(options)],
  }).compile();
}
