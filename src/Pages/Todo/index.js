import React, { Component } from 'react';
import './todoStyle.css';

class Todo extends Component {
  state = {
    todoText: '',
    todoList: [],
  };

  onChangeText = (event) => {
    this.setState({
      todoText: event.target.value,
    });
  };

  addTodo = (event) => {
    event.preventDefault();
    this.setState(({ todoText, todoList }) => ({
      todoList: [...todoList, todoText],
    }));
  };

  render() {
    console.log('render');

    const { todoText } = this.state;

    return (
      <div className="container">
        <h1>Todo App</h1>

        <form onSubmit={this.addTodo}>
          <input
            type="text"
            value={todoText}
            name="todo"
            id="todo"
            onChange={this.onChangeText}
          />
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
