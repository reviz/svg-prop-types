# svg-prop-types

[![Build Status][travis-svg]][travis-url]

Custom SVG prop types for React.

SVG content type:
- `SVGLength`: ensure that the length used is compatible with a SVG length
(see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#Length)

...

SVG and HTML attributes sets:
- `shape` contains common shapes attributes
- `conditionalProcessing` 
- `core` contains core HTML attributes
- `graphicalEvent` contains graphical events attributes
- `documentEvent` contains document events attributes
- `presentation` contains presentational attributes

...

SVG elements:
- `SVG`
- `circle`
- `line`

...

## Usage
```
import React, { Component } from 'react';
import { circle as circlePropType } from 'svg-prop-types';

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

## Production

Build pipeline is borrowed from https://github.com/airbnb/prop-types

> Since PropTypes are typically not included in production builds of React, this library’s functionality serves no useful purpose. As such, when the NODE_ENV environment variable is "production", instead of exporting the implementations of all these prop types, we export mock functions - in other words, something that ensures that no exceptions are thrown, but does no validation. When environment variables are inlined (via a browserify transform or webpack plugin), then tools like webpack or uglify are able to determine that only the mocks will be imported - and can avoid including the entire implementations in the final bundle that is sent to the browser. This allows for a much smaller ultimate file size, and faster in-browser performance, without sacrificing the benefits of PropTypes themselves.

## Tests

Simply clone the repo, npm install, and run npm test

[package-url]: https://npmjs.org/package/svg-prop-types
[travis-svg]: https://travis-ci.org/reviz/svg-prop-types.svg
[travis-url]: https://travis-ci.org/reviz/svg-prop-types
