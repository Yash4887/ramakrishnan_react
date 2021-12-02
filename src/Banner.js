import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

// let counter = 0;

// LIfe Cycle method

// FIrst life cycle method of mounting stage
// Manipulate Data before display on browser

// Mounting
// -> Constructor(call only once)
// -> 1. Derive State value base on Props
// -> 2. Bind Noramal Methods(so we can use this pointer in methods)
// -> 3. Analytics

// -> GetDerivedStateFromProps(calls whenever props or state value change)
// -> 1. Derive New State value base on props or old state value;

// -> Render
// -> 1. Render HTML

// -> ComponentDidMount
// -> 1. Display data on component Load
// -> 2. Register an event
// -> 3. Manipulate DOM

// Updating (Props or State)
// 1. GetDerivedStateFromProps
// 2. ShouldComponentUpdate
// 3. Render
// 4. getSnapshotBeforeUpdate
// 5. ComponentDidUpdate

// Unmount

// Error

class Banner extends Component {
  state = {
    counter: 0,
    products: [],
  };

  // Analytics We can use Constructor
  // Base on props value define new state value
  // Bind methods
  // call only once
  constructor(props) {
    super(props);

    // this.state = {
    //   counter: 0,
    //    greet: `Hello, ${props.name}`,
    // };
    console.log('constructor');
    // Make API Call to pass to data to server
    // this.incrementCounter = this.incrementCounter.bind(this);
    // this.decrementCounter = this.decrementCounter.bind(this);
  }

  // Base on props or old state value define new state value
  // call everytime when state or prop value change
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return {
      greet: `Hello, ${props.name}`,
    };
  }

  // Manipulate DOM
  // Display data on page load
  // register events
  componentDidMount() {
    console.log(document.getElementById('heading'));
    // make product API call and get data
    // set products using this.setState({products: data })
    document.addEventListener('copy', () => {
      console.log('Copied');
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('next state', nextState);
  //   console.log('current state', this.state);

  // }

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
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
        <h1 id="heading">{this.state.greet}</h1>
        <h2>{this.state.counter}</h2>
        <button type="button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
        <button type="button" onClick={this.decrementCounter}>
          Decrement Counter
        </button>

        <Child1 />
        <Child2 />
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
