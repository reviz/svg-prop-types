import PropTypes from 'prop-types';

import shape from '/';

export default {
  ...shape,
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
};
