import React from 'react';

const returningNullTimeline = require('./images/should-component-update.png');
const returningDefaultedComponentsTimeline = require('./images/shoushould-component-update.png');

const notes = `
*
`;

export default class Slide extends React.Component {
  static notes = notes;

  render() {
    return (
      <div>
        <h1>
          Returning null from your render method
        </h1>
        <img
          src={ imgSrc }
          width={ 550 }
          height={ 350 } />
      </div>
    );
  }
}
