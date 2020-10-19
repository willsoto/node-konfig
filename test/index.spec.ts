import { expect } from "chai";
import { sum } from "../src";

describe("tests", function () {
  it("work", function () {
    const result = sum(2, 2);

    expect(result).to.eq(4);
  });
});
