# svg-prop-types

Custom SVG prop types for React.

## Usage
```
import React, { Component } from 'react';
import circlePropType from 'svg-prop-types/shape/circle';

class Circle extends Component {
  static propTypes = circlePropType;

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
