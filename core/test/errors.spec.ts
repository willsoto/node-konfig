import test from "ava";
import {
  KeyNotFoundError,
  NoValueForKeyError,
  ValueNotFoundError,
} from "../src/errors.js";

test("KeyNotFoundError", function (t) {
  t.plan(1);

  const error = new KeyNotFoundError("some-key");

  t.is(error.message, "Key not found: some-key");
});

test("NoValueForKeyError", function (t) {
  t.plan(1);

  const error = new NoValueForKeyError("some-key");

  t.is(error.message, "No value found for key: some-key");
});

test("ValueNotFoundError", function (t) {
  t.plan(1);

  const error = new ValueNotFoundError();

  t.is(error.message, "Value not found");
});
