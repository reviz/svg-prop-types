import PropTypes from "prop-types";
import shape from "../shape";

export default {
  ...shape,
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
};
