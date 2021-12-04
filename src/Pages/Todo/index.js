import React, { Component, createRef } from 'react';
import './todoStyle.css';

class Todo extends Component {
  state = {
    // todoText: '',
    todoList: [],
  };

  todoRef = createRef();

  // onChangeText = (event) => {
  //   this.setState({
  //     todoText: event.target.value,
  //   });
  // };

  addTodo = (event) => {
    event.preventDefault();
    this.setState(
      ({ todoList }) => {
        // const todoText = document.getElementById('todo').value;
        const todoText = this.todoRef.current.value;
        return {
          todoList: [{ text: todoText, id: new Date().valueOf() }, ...todoList],
        };
      },
      () => {
        this.todoRef.current.value = '';
      },
    );
  };

  render() {
    const { todoList } = this.state;

    return (
      <div className="container">
        <h1>Todo App</h1>

        <form onSubmit={this.addTodo}>
          <input
            ref={this.todoRef}
            type="text"
            // value={todoText}
            name="todo"
            id="todo"
            // onChange={this.onChangeText}
          />
          <input type="submit" value="Add Todo" />
        </form>

        <div className="todo-list">
          {todoList.map((item) => (
            <div className="todo-item" key={item.id}>
              <input type="checkbox" name="isDone" id="isDone" />
              <p>{item.text}</p>
              <button type="button">Delete</button>
            </div>
          ))}
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
