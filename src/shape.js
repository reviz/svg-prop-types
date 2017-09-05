import {
  conditionalProcessing,
  core,
  graphicalEvent,
  presentation,
  className,
  style,
  externalResourcesRequired,
  transform,
} from "./";

export default {
  ...conditionalProcessing,
  ...core,
  ...graphicalEvent,
  ...presentation,
  ...className,
  ...style,
  ...externalResourcesRequired,
  ...transform,
};
