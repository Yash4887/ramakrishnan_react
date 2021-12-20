/* eslint-disable */
import React, { useState, useEffect, memo, useRef } from 'react';
import Child1 from './Child1';

// 1. to use state
// 2. to use life cycle method
// 3. to manipulate data

// benefits of hooks
// 1. because of function component bundle size will be reduced
// 2. less coding efforts
// 3. Dont require oops concepts

// (not possible in Function Component)
// getSnapshotBeforeUpdate
// getDerivedStateError
// componentDidCatch

const AppHook = ({ val, name }) => {
  const isLoaded = useRef(false);
  const [counter, setCounter] = useState(val);
  const [greet, setGreet] = useState(`Hello, ${name}`);

  // ComponentDidMount
  // ComponentDidUpdate
  useEffect(() => {
    if (isLoaded.current === true) {
    }
  }, [counter, greet]);

  // ComponentDidMount
  useEffect(() => {
    isLoaded.current = true;
  }, []);

  return (
    <div>
      <h1>{greet}</h1>

      <h2>{counter}</h2>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>
      <button type="button" onClick={() => setCounter(counter - 1)}>
        Decrement Counter
      </button>
      {counter < 10 && <Child1 />}
    </div>
  );
};

export default memo(AppHook);
