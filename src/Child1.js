import React, { memo } from 'react';

const Child1 = () => {
  console.log('Child 1 Render');
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
};

export default memo(Child1);
