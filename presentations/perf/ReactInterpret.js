import React from 'react';

const imgSrc = require('./images/reactPerfTools.png');
const notes = `
* "Wasted" time is spent on components that didn't actually render anything, e.g. the render stayed the same, so the DOM wasn't touched.
  * Components that pop up as having wasted time are good candidates for shouldComponentUpdate
* Instances represents the number of instances of that component on the page
`;

export default class Slide extends React.Component {
  static notes = notes;

  render() {
    return (
      <div>
        <h1>
          But what does it mean?!??
        </h1>
        <img src={ imgSrc } />
      </div>
    );
  }
}
