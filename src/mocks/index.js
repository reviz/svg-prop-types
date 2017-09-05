function noop() {}
noop.isRequired = noop;
function noopThunk() {
  return noop;
}

module.exports = {
  conditionalProcessing: {},
  core: {},
  graphicalEvent: {},
  documentEvent: {},
  presentation: {},
  className: noopThunk,
  style: noopThunk,
  externalResourcesRequired: noopThunk,
  transform: noopThunk,
  SVGLength: noopThunk,
  SVG: {},
  shape: {},
  circle: {},
  line: {},
};
