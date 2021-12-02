import React, { PureComponent } from 'react';
// import shallowCompare from 'react-addons-shallow-compare';

class Child2 extends PureComponent {
  state = {};

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }

  render() {
    console.log('Child 2 Render');
    return (
      <div>
        <h1>Child 2 Class Component</h1>
      </div>
    );
  }
}

export default Child2;
