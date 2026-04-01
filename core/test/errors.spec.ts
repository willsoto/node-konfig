import { describe, test, expect } from "bun:test";
import { KeyNotFoundError, NoValueForKeyError, ValueNotFoundError } from "../src/errors.js";

describe("Errors", () => {
  test("KeyNotFoundError", () => {
    const error = new KeyNotFoundError("some-key");

    expect(error.message).toBe("Key not found: some-key");
  });

  test("NoValueForKeyError", () => {
    const error = new NoValueForKeyError("some-key");

    expect(error.message).toBe("No value found for key: some-key");
  });

  test("ValueNotFoundError", () => {
    const error = new ValueNotFoundError();

    expect(error.message).toBe("Value not found");
  });
});
