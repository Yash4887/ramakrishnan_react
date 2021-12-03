import React, { Component } from 'react';
import './todoStyle.css';

class Todo extends Component {
  render() {
    return (
      <div className="container">
        <h1>Todo App</h1>

        <form>
          <input type="text" name="todo" id="todo" />
          <input type="submit" value="Add Todo" />
        </form>

        <div className="todo-list">
          <div className="todo-item">
            <input type="checkbox" name="isDone" id="isDone" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              nihil.
            </p>
            <button type="button">Delete</button>
          </div>

          <div className="todo-item">
            <input type="checkbox" name="isDone" id="isDone" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              nihil.
            </p>
            <button type="button">Delete</button>
          </div>

          <div className="todo-item">
            <input type="checkbox" name="isDone" id="isDone" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              nihil.
            </p>
            <button type="button">Delete</button>
          </div>
        </div>

        <div className="filter-section">
          <button type="button">All</button>
          <button type="button">Pending</button>
          <button type="button">Completed</button>
        </div>
      </div>
    );
  }
}

export default Todo;
