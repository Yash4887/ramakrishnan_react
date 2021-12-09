import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TodoList = ({ todoList, handleTodoStatus, handleDeleteTodo, status }) => (
  <div className="todo-list">
    {todoList.map((item) => (
      <div className="todo-item" key={item.id}>
        <input
          type="checkbox"
          name="isDone"
          id="isDone"
          checked={item.isDone}
          disabled={status.some(
            (x) => x.type === 'update' && x.status === 'request' && x.id === item.id,
          )}
          onChange={() => handleTodoStatus(item)}
        />
        <p
          className={cn({
            isCompleted: item.isDone,
          })}
        >
          {item.text}
        </p>
        <button
          type="button"
          disabled={status.some(
            (x) => x.type === 'delete' && x.status === 'request' && x.id === item.id,
          )}
          onClick={() => handleDeleteTodo(item)}
        >
          Delete
        </button>
      </div>
    ))}
    {status.some((x) => x.type === 'add' && x.status === 'request') && <p>Adding Record...</p>}
  </div>
);

TodoList.propTypes = {
  handleTodoStatus: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
  status: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      status: PropTypes.string,
    }),
  ).isRequired,
};

export default memo(TodoList);
