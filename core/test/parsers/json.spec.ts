import test from "ava";
import { JSONParser } from "../../src/index.js";

test("JSONParser should parse the contents provided as JSON", function (t) {
  t.plan(1);

  const parser = new JSONParser();

  t.deepEqual(
    parser.parse(
      JSON.stringify({
        foo: "bar",
      }),
    ),
    {
      foo: "bar",
    },
  );
});
