import wrapValidator from 'airbnb-prop-types/src/helpers/wrapValidator';

function requiredCSSLength(props, propName, componentName) {
  const value = props[propName];
  if (value == null || !/^[+-]?[0-9]+.?([0-9]+)?(px|r?em|ex|%|in|cm|mm|pt|pc)$/.test(value)) {
    return new TypeError(`${propName} in ${componentName} must be a CSS length`);
  }
  return null;
}

const validator = function integer(props, propName, ...rest) {
  const value = props[propName];

  if (value == null) {
    return null;
  }

  return requiredCSSLength(props, propName, ...rest);
};

validator.isRequired = requiredCSSLength;

export default () => wrapValidator(validator, 'CSSLength');
