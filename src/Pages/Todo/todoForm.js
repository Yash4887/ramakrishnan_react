import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ handleAddTodo }, ref) => (
  <form onSubmit={handleAddTodo}>
    <input ref={ref} type="text" name="todo" id="todo" />
    <input type="submit" value="Add Todo" />
  </form>
));

TodoForm.displayName = 'TodoForm';

TodoForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default memo(TodoForm);
