import React from 'react';

const imgSrc = require('./images/should-component-update.png');
const notes = `
* shouldComponentUpdate is all about avoiding reconcilliation
* Describe the chart graphic
`;

export default class Slide extends React.Component {
  static notes = notes;

  render() {
    return (
      <div>
        <h1>
          But what does shouldComponentUpdate do?
        </h1>
        <img
          src={ imgSrc }
          width={ 550 }
          height={ 350 } />
      </div>
    );
  }
}
