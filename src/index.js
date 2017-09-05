import PropTypes from "prop-types";
import SVGLength from "./content-types/SVGLength";
import SVG from "./SVG";
import circle from "./shapes/circle";
import line from "./shapes/line";
import shape from "./shape";

export const conditionalProcessing = {
  requiredExtensions: PropTypes.string,
  requiredFeatures: PropTypes.string,
  systemLanguage: PropTypes.string,
};

export const core = {
  id: PropTypes.string,
  "xml:base": PropTypes.string,
  "xml:lang": PropTypes.string,
  "xml:space": PropTypes.string,
  tabIndex: PropTypes.number,
};

export const graphicalEvent = {
  onActivate: PropTypes.func,
  onClick: PropTypes.func,
  onFocusIn: PropTypes.func,
  onFocusOut: PropTypes.func,
  onLoad: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseUp: PropTypes.func,
};

export const documentEvent = {
  onAbort: PropTypes.func,
  onError: PropTypes.func,
  onResize: PropTypes.func,
  onScroll: PropTypes.func,
  onUnload: PropTypes.func,
};

export const presentation = {
  alignmentBaseline: PropTypes.string,
  baselineShift: PropTypes.string,
  clip: PropTypes.string,
  clipPath: PropTypes.string,
  clipRule: PropTypes.string,
  color: PropTypes.string,
  colorInterpolation: PropTypes.string,
  colorInterpolationFilters: PropTypes.string,
  colorProfile: PropTypes.string,
  colorRendering: PropTypes.string,
  cursor: PropTypes.string,
  direction: PropTypes.string,
  display: PropTypes.string,
  dominantBaseline: PropTypes.string,
  enableBackground: PropTypes.string,
  fill: PropTypes.string,
  fillOpacity: PropTypes.string,
  fillRule: PropTypes.string,
  filter: PropTypes.string,
  floodColor: PropTypes.string,
  floodOpacity: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontSizeAdjust: PropTypes.string,
  fontStretch: PropTypes.string,
  fontStyle: PropTypes.string,
  fontVariant: PropTypes.string,
  fontWeight: PropTypes.string,
  glyphOrientationHorizontal: PropTypes.string,
  glyphOrientationVertical: PropTypes.string,
  imageRendering: PropTypes.string,
  kerning: PropTypes.string,
  letterSpacing: PropTypes.string,
  lightingColor: PropTypes.string,
  markerEnd: PropTypes.string,
  markerMid: PropTypes.string,
  markerStart: PropTypes.string,
  mask: PropTypes.string,
  opacity: PropTypes.string,
  overflow: PropTypes.string,
  pointerEvents: PropTypes.string,
  shapeRendering: PropTypes.string,
  stopColor: PropTypes.string,
  stopOpacity: PropTypes.string,
  stroke: PropTypes.string,
  strokeDasharray: PropTypes.string,
  strokeDashoffset: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  strokeMiterlimit: PropTypes.string,
  strokeOpacity: PropTypes.string,
  strokeWidth: PropTypes.string,
  textAnchor: PropTypes.string,
  textDecoration: PropTypes.string,
  textRendering: PropTypes.string,
  unicodeBidi: PropTypes.string,
  visibility: PropTypes.string,
  wordSpacing: PropTypes.string,
  writingMode: PropTypes.string,
};

export const className = PropTypes.string;

export const style = PropTypes.objectOf(
  PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
);

export const externalResourcesRequired = PropTypes.bool;

export const transform = PropTypes.string;

export { SVGLength, SVG, shape, circle, line };
