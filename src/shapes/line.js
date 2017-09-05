import PropTypes from "prop-types";
import shape from "../shape";

export default {
  ...shape,
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
};
