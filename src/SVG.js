import PropTypes from "prop-types";
import {
  conditionalProcessing,
  core,
  documentEvent,
  graphicalEvent,
  presentation,
  className,
  style,
  externalResourcesRequired,
} from "./";
import SVGLength from "./content-types/SVGLength";

export default {
  ...conditionalProcessing,
  ...core,
  ...documentEvent,
  ...graphicalEvent,
  ...presentation,
  ...className,
  style,
  ...externalResourcesRequired,
  version: PropTypes.string,
  baseProfile: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: SVGLength,
  height: SVGLength,
  preserveAspectRatio: PropTypes.string,
  contentScriptType: PropTypes.string,
  contentStyleType: PropTypes.string,
  viewBox: PropTypes.string,
};
