import { expect } from "chai";
import { JSONParser } from "../../src";

describe("JSONParser", function () {
  it("parses the contents provided as JSON", function () {
    const parser = new JSONParser();
    expect(parser.parse(JSON.stringify({ foo: "bar" }))).to.eql({
      foo: "bar",
    });
  });
});
