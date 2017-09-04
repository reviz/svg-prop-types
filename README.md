# svg-prop-types

Custom SVG prop types for React.

Usage
```
import React, { Component } from 'react';
import { circle as CirclePropType } from 'svg-prop-types';

class Circle extends Component {
  static propTypes = CirclePropType;

  render() {
    return (
      <circle
        {...this.props}
      />
    );
  }
}

export default Circle;
```
