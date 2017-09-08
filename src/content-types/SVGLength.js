function wrapValidator(validator, typeName, typeChecker = null) {
  return Object.assign(validator.bind(), {
    typeName,
    typeChecker,
    isRequired: Object.assign(validator.isRequired.bind(), {
      typeName,
      typeChecker,
      typeRequired: true,
    }),
  });
}

function SVGLength(props, propName, componentName) {
  const value = props[propName];

  if (typeof value === "number") {
    return null;
  }

  if (value == null || !/^[+-]?[0-9]+.?([0-9]+)?(em|ex|px|in|cm|mm|pt|pc|%)?$/.test(value)) {
    return new TypeError(`${propName} in ${componentName} must be a SVG length`);
  }

  return null;
}

SVGLength.isRequired = function SVGLengthRequired(props, propName, componentName) {
  const value = props[propName];

  if (value == null) {
    return new TypeError(
      `${propName} in ${componentName} is marked as required but its value is \`${value}\`.`
    );
  }

  return SVGLength(props, propName, componentName);
};

export default wrapValidator(SVGLength, "SVGLength");
