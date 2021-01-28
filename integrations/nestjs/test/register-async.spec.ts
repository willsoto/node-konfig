import { Injectable, Module, Provider } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { Store, ValueLoader } from "@willsoto/node-konfig-core";
import { expect } from "chai";
import {
  NodeKonfigAsyncOptions,
  NodeKonfigModule,
  NodeKonfigOptionsFactory,
} from "../src";

describe("NestJS integration (#registerAsync)", function () {
  let testingModule: TestingModule;

  afterEach(function () {
    return testingModule.close();
  });

  it("registers the loader as Store if no name is provided", async function () {
    testingModule = await registerAsync({
      useFactory() {
        return {
          loaders: [
            new ValueLoader({
              values: {
                foo: "bar",
              },
            }),
          ],
        };
      },
    });
    const store = testingModule.get(Store);

    expect(store).to.be.ok;
  });

  it("registers the injectable with the given name if provided", async function () {
    testingModule = await registerAsync({
      name: "node1",
      useFactory() {
        return {
          loaders: [
            new ValueLoader({
              values: {
                foo: "bar",
              },
            }),
          ],
        };
      },
    });
    const store = testingModule.get<Store>("node1");

    expect(store).to.be.ok;
    expect(store.get("foo")).to.eql("bar");
  });

  it("can register options via useClass", async function () {
    @Injectable()
    class MyClass implements NodeKonfigOptionsFactory {
      createNodeKonfigOptions() {
        return Promise.resolve({
          loaders: [
            new ValueLoader({
              values: {
                foo: "bar",
              },
            }),
          ],
        });
      }
    }

    testingModule = await registerAsync({
      useClass: MyClass,
    });

    const store = testingModule.get(Store);

    expect(store.get("foo")).to.eql("bar");
  });

  it("can register options via useClass with a name", async function () {
    @Injectable()
    class MyClass implements NodeKonfigOptionsFactory {
      createNodeKonfigOptions() {
        return Promise.resolve({
          loaders: [
            new ValueLoader({
              values: {
                foo: "bar",
              },
            }),
          ],
        });
      }
    }

    testingModule = await registerAsync({
      name: "node2",
      useClass: MyClass,
    });

    const store = testingModule.get<Store>("node2");

    expect(store.get("foo")).to.eql("bar");
  });

  it("can register options via useExisting", async function () {
    @Injectable()
    class MyClass implements NodeKonfigOptionsFactory {
      createNodeKonfigOptions() {
        return Promise.resolve({
          loaders: [
            new ValueLoader({
              values: {
                foo: "bar",
              },
            }),
          ],
        });
      }
    }

    @Module({
      providers: [MyClass],
      exports: [MyClass],
    })
    class MyModule {}

    testingModule = await registerAsync(
      {
        imports: [MyModule],
        useExisting: MyClass,
        inject: [MyClass],
      },
      [MyClass],
    );

    const store = testingModule.get(Store);

    expect(store.get("foo")).to.eql("bar");
  });

  it("raises an error if invalid options are provided", function () {
    return expect(() => registerAsync({})).to.throw(
      "Invalid configuration. Must provide useClass or useExisting",
    );
  });
});

function registerAsync(
  options: NodeKonfigAsyncOptions,
  providers: Provider[] = [],
): Promise<TestingModule> {
  return Test.createTestingModule({
    imports: [NodeKonfigModule.registerAsync(options)],
    providers,
  }).compile();
}
