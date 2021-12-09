import React, { memo, useEffect } from 'react';

const Child1 = () => {
  // ComponentDidMount
  // ComponentDidUpdate
  // ComponentWillUnmount
  useEffect(() => {
    const mouseMove = () => {
      console.log('mouse moved');
    };
    document.addEventListener('mousemove', mouseMove);

    const interval = setInterval(() => {
      console.log('interval');
    }, 1000);

    // ComponentWillUnmount
    return () => {
      document.removeEventListener('mousemove', mouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
};

export default memo(Child1);
