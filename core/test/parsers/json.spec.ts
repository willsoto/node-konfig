import { describe, test, expect } from "vitest";
import { JSONParser } from "../../src/index.js";

describe("JSONParser", () => {
  test("should parse the contents provided as JSON", () => {
    const parser = new JSONParser();

    expect(
      parser.parse(
        JSON.stringify({
          foo: "bar",
        }),
      ),
    ).toEqual({
      foo: "bar",
    });
  });
});
