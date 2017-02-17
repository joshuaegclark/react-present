import React from 'react';

const notes = `
 * remember to make fun of angular
 * more notes
`;

export default class Slide extends React.Component {
  static notes = notes

  render() {
    return (
      <div>
        <h1>
          So apparently, perf matters.
        </h1>
        <h3>Jarsh @joshuaegclark</h3>
      </div>
    );
  }
}
