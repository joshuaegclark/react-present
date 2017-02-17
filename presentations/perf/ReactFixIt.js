import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const notes = `
* PureRenderMixin
  * does a shallow compare
    * This is why pairing immutable data structures with React is nice, a shallow compare of two immutable maps, will tell you if they changed even if the change was deeply nested within the map
  * skips updates for the whole component subtree. Make sure all the children components are also "pure".
  * Called a lot, so the implementation should be fast. Prefer cheap comparisons (a la shallow comparisons of immutable data structures).

`;

const theCode = `
import PureRenderMixin from 'react-addons-pure-render-mixin';
class FooComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return <div className={this.props.className}>foo</div>;
  }
}
`;

export default class Slide extends React.Component {
  static notes = notes;

  render() {
    const containerStyle = {
      display: 'flex',
      // justifyContent: 'center',
      alignContent: 'space-between',
      // flexDirection: 'column'
    };

    return (
      <div>
        <h1>
          But what do I do to fix it?!??
        </h1>
        <div style={ containerStyle }>
          <CodeBlock>{ theCode }</CodeBlock>
        </div>
      </div>
    );
  }
}
