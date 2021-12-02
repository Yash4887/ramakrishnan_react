import React, { Component } from 'react';

// let counter = 0;

// LIfe Cycle method

// Mounting

// ->

// Updating (Props or State)

// Unmount

// Error

class Banner extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    console.log('render Banner');
    return (
      <section
        id="banner"
        style={{
          height: '100vh',
          backgroundColor: 'grey',
        }}
      >
        <h1>{this.props.title}</h1>
        <h2>{this.state.counter}</h2>
        <button type="button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
        <button type="button" onClick={this.decrementCounter}>
          Decrement Counter
        </button>
      </section>
    );
  }
}

// const Banner = (props) => (
//   <section
//     id="banner"
//     style={{
//       height: '100vh',
//       backgroundColor: 'grey',
//     }}
//   >
//     {props.title}
//   </section>
// );

export default Banner;
