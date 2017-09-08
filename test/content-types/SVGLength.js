import { expect } from "chai";
import React from "react";
import secret from "prop-types/lib/ReactPropTypesSecret";
import { SVGLength } from "../../";

function callValidator(
  validator,
  { props },
  propName = "",
  componentName = "",
  location = "",
  propFullName = ""
) {
  return validator(props, propName, componentName, location, propFullName, secret);
}

describe("SVGLength", () => {
  it("returns a function", () => {
    expect(typeof SVGLength).to.equal("function");
    expect(typeof SVGLength.isRequired).to.equal("function");
  });

  function assertPasses(validator, element, propName) {
    const error = callValidator(validator, element, propName, '"SVGLength" test');
    expect(error).to.equal(null);
  }

  function assertFails(validator, element, propName) {
    const error = callValidator(validator, element, propName, '"SVGLength" test');
    expect(error).to.be.instanceOf(Error);
  }

  it("fails when the prop value is not a SVG compatible length", () => {
    assertFails(SVGLength.isRequired, <div a="foo" />, "a");
    assertFails(SVGLength.isRequired, <div a={{}} />, "a");
    assertFails(SVGLength.isRequired, <div a={[]} />, "a");
    assertFails(SVGLength.isRequired, <div a />, "a");
  });

  it("passes when the prop value is a SVG compatible length", () => {
    assertPasses(SVGLength, <div a={100} />, "a");
    assertPasses(SVGLength, <div a="100" />, "a");
    assertPasses(SVGLength, <div a="100px" />, "a");
    assertPasses(SVGLength, <div a="100ex" />, "a");
    assertPasses(SVGLength, <div a="100px" />, "a");
    assertPasses(SVGLength, <div a="100in" />, "a");
    assertPasses(SVGLength, <div a="100cm" />, "a");
    assertPasses(SVGLength, <div a="100mm" />, "a");
    assertPasses(SVGLength, <div a="100pt" />, "a");
    assertPasses(SVGLength, <div a="100pc" />, "a");
    assertPasses(SVGLength, <div a="100pc" />, "a");
    assertPasses(SVGLength, <div a="100%" />, "a");
  });
});
