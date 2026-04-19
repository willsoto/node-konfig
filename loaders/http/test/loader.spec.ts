import { afterEach, describe, expect, mock, spyOn, test } from "bun:test";
import * as Konfig from "@willsoto/node-konfig-core";
import { HttpLoader, type HttpLoaderOptions } from "../src/index.js";

const prefixUrl = "https://internal.config.com";

const mockFetch = mock(async () => {
  throw new Error("unmocked fetch call");
}) as typeof globalThis.fetch;

globalThis.fetch = mockFetch;

function makeResponse(status: number, body: string) {
  return new Response(body, { status });
}

describe("HttpLoader", () => {
  afterEach(() => {
    mockFetch.mockReset();
  });

  test("should load secrets from the given vault", async () => {
    const responseBody = JSON.stringify({
      database: {
        host: "rds.foo.bar",
      },
    });

    mockFetch.mockResolvedValueOnce(makeResponse(200, responseBody));

    const store = await makeStore({
      sources: [
        {
          url: `${prefixUrl}/config.json`,
          parser: new Konfig.JSONParser(),
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      database: {
        host: "rds.foo.bar",
      },
    });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch.mock.calls[0][0]).toBe(`${prefixUrl}/config.json`);
  });

  test("should merge secrets from the loader with secrets loaded from other locations", async () => {
    const responseBody = JSON.stringify({
      database: {
        host: "rds.foo.bar",
      },
    });

    mockFetch.mockResolvedValueOnce(makeResponse(200, responseBody));

    const fileLoader = new Konfig.ValueLoader({
      values: {
        name: "foo",
      },
    });

    const store = await makeStore(
      {
        sources: [
          {
            url: `${prefixUrl}/config.json`,
            fetchOptions: {
              method: "POST",
            },
            parser: new Konfig.JSONParser(),
          },
        ],
      },
      [fileLoader],
    );

    expect(store.toJSON()).toEqual({
      name: "foo",
      database: {
        host: "rds.foo.bar",
      },
    });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch.mock.calls[0][1]).toEqual({ method: "POST" });
  });

  test("should respect the maxRetries option", async () => {
    mockFetch.mockRejectedValue(new Error("Forbidden"));

    const store = new Konfig.Store();
    const loader = new HttpLoader({
      maxRetries: 3,
      sources: [
        {
          url: `${prefixUrl}/config.json`,
          parser: new Konfig.JSONParser(),
        },
      ],
    });
    const spy = spyOn(loader, "process");

    store.registerLoader(loader);

    try {
      await store.init();
      // Should not reach here
      expect(true).toBe(false);
    } catch (error: unknown) {
      expect((error as Error).message).toMatch(/Forbidden/);
    }

    // Initial call + the 3 retries
    expect(spy).toHaveBeenCalledTimes(4);
  });

  test("should respect the stopOnFailure option", async () => {
    const responseBody = JSON.stringify({
      database: {
        host: "rds.foo.bar",
      },
    });

    // First call: config-not-found.json -> 404 (text() throws since body isn't valid JSON, but stopOnFailure=false catches it)
    mockFetch.mockResolvedValueOnce(makeResponse(404, "Not found"));
    // Second call: config.json -> 200
    mockFetch.mockResolvedValueOnce(makeResponse(200, responseBody));

    const parser = new Konfig.JSONParser();
    const store = await makeStore({
      stopOnFailure: false,
      maxRetries: 0,
      sources: [
        {
          url: `${prefixUrl}/config-not-found.json`,
          parser,
        },
        {
          url: `${prefixUrl}/config.json`,
          parser,
        },
      ],
    });

    expect(store.toJSON()).toEqual({
      database: {
        host: "rds.foo.bar",
      },
    });
  });
});

async function makeStore(
  options: HttpLoaderOptions,
  loaders: Konfig.Loader[] = [],
): Promise<Konfig.Store> {
  const store = new Konfig.Store();

  loaders.forEach((loader) => store.registerLoader(loader));

  store.registerLoader(new HttpLoader(options));

  await store.init();

  return store;
}
