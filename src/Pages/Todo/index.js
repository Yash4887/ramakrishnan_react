import React, { Component, createRef } from 'react';
import cn from 'classnames';
import './todoStyle.css';

class Todo extends Component {
  state = {
    // todoText: '',
    todoList: [],
    filterType: 'all',
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
          todoList: [
            { text: todoText, id: new Date().valueOf(), isDone: false },
            ...todoList,
          ],
        };
      },
      () => {
        this.todoRef.current.value = '';
      },
    );
  };

  toggleTodoStatus = (item) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.map((element) => {
        if (element.id === item.id) {
          return { ...element, isDone: !element.isDone };
        }
        return element;
      }),
    }));
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.filter((x) => x.id !== item.id),
    }));
  };

  changeFilterStatus = (filterType) => {
    this.setState({
      filterType,
    });
  };

  render() {
    console.log('render');

    const { todoList, filterType } = this.state;

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
                  onChange={() => this.toggleTodoStatus(item)}
                />
                <p
                  className={cn({
                    isCompleted: item.isDone,
                  })}
                >
                  {item.text}
                </p>
                <button type="button" onClick={() => this.deleteTodo(item)}>
                  Delete
                </button>
              </div>
            ))}
        </div>

        <div className="filter-section">
          <button
            type="button"
            className={cn({
              active: filterType === 'all',
            })}
            onClick={() => this.changeFilterStatus('all')}
          >
            All
          </button>
          <button
            type="button"
            className={cn({
              active: filterType === 'pending',
            })}
            onClick={() => this.changeFilterStatus('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className={cn({
              active: filterType === 'completed',
            })}
            onClick={() => this.changeFilterStatus('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
