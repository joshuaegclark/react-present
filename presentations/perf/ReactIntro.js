import React from 'react';

const imgSrc = require('./images/devtoolsLocation.png');
const notes = `
 *
 * moar
`;

export default class Slide extends React.Component {
  static notes = notes;

  render() {
    return (
      <div>
        <h1>
          <code>import Perf from 'react-addons-perf';</code>
        </h1>
        <p>or in Churro land...just turn 'em on!</p>
        <img src={ imgSrc } />
        <p>Select 'Performance (Wasted Time)' from the dropdown</p>
      </div>
    );
  }
}
