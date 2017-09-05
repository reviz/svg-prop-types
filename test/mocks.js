import { expect } from "chai";
import values from "object.values";
import mocks from "../build/mocks";
import * as implementations from "../";

describe("mocks", () => {
  it("has the same keys", () => {
    expect(Object.keys(mocks)).to.eql(Object.keys(implementations));
  });

  it("matches the types", () => {
    const mockTypes = values(mocks).map(x => typeof x);
    const implementationTypes = values(implementations).map(x => typeof x);
    expect(mockTypes).to.eql(implementationTypes);
  });
});
