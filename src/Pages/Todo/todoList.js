import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TodoList = ({ todoList, filterType, handleTodoStatus, handleDeleteTodo }) => (
  <div className="todo-list">
    {todoList
      .filter((item) => {
        switch (filterType) {
          case 'pending':
            return item.isDone === false;

          case 'completed':
            return item.isDone === true;

          default:
            return true;
        }
      })
      .map((item) => (
        <div className="todo-item" key={item.id}>
          <input
            type="checkbox"
            name="isDone"
            id="isDone"
            checked={item.isDone}
            onChange={() => handleTodoStatus(item)}
          />
          <p
            className={cn({
              isCompleted: item.isDone,
            })}
          >
            {item.text}
          </p>
          <button type="button" onClick={() => handleDeleteTodo(item)}>
            Delete
          </button>
        </div>
      ))}
  </div>
);

TodoList.propTypes = {
  handleTodoStatus: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
};

export default memo(TodoList);
