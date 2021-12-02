/* eslint-disable react/function-component-definition */
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

// Function Component(stateless component)
// -> Function Occupy Less memory
// -> Only use for display UI base on props

// Class Component (stateful Component)
// -> if you want to write methods
// -> base on event if you want to change UI using state

const App = () => (
  <>
    <Header />
    <Banner title="Hello Yagnesh" />
    <Footer />
  </>
);

export default App;
