/* eslint-disable */
import React, { PureComponent } from 'react';
// import shallowCompare from 'react-addons-shallow-compare';

class Child2 extends PureComponent {
  state = {
    counter: 0,
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);
    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
    clearInterval(this.interval);
  }

  mouseMove = () => {
    console.log('Mouse Moved');
  };

  incrementCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    if (this.state.counter > 5) {
      throw new Error('Something went wrong');
    }
    return (
      <div>
        <h1>Child 2 Class Component</h1>
        <h2>{this.state.counter}</h2>
        <button type="button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
      </div>
    );
  }
}

export default Child2;
