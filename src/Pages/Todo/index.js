import React, { createRef, Suspense, lazy, PureComponent } from 'react';
import './todoStyle.css';
import TodoForm from './todoForm';

const AsyncTodoList = lazy(() => import(/* webpackChunkName: "todoList" */ './todoList'));
const AsyncTodoFilter = lazy(() => import(/* webpackChunkName: "todoFilter" */ './todoFilter'));

class Todo extends PureComponent {
  state = {
    todoList: [],
    filterType: 'all',
  };

  todoRef = createRef();

  async componentDidMount() {
    this.loadTodoData('all');
  }

  loadTodoData = async (filterType) => {
    try {
      let url = 'http://localhost:3000/todo-list';
      if (filterType !== 'all') {
        url = `${url}?isDone=${filterType === 'completed'}`;
      }

      const res = await fetch(url);
      const todoList = await res.json();
      this.setState({
        todoList,
        filterType,
      });
    } catch (error) {
      console.error(error);
    }
  };

  addTodo = async (event) => {
    try {
      event.preventDefault();
      const data = {
        text: this.todoRef.current.value,
        isDone: false,
      };
      const res = await fetch('http://localhost:3000/todo-list', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();
      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
        }),
        () => {
          this.todoRef.current.value = '';
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  toggleTodoStatus = async (item) => {
    try {
      const res = await fetch(`http://localhost:3000/todo-list/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...item,
          isDone: !item.isDone,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      this.setState(({ todoList }) => ({
        todoList: todoList.map((element) => {
          if (element.id === item.id) {
            return json;
          }
          return element;
        }),
      }));
    } catch (error) {
      console.error(error);
    }
  };

  deleteTodo = async (item) => {
    try {
      await fetch(`http://localhost:3000/todo-list/${item.id}`, {
        method: 'DELETE',
      });
      this.setState(({ todoList }) => ({
        todoList: todoList.filter((x) => x.id !== item.id),
      }));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { filterType, todoList } = this.state;

    return (
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm handleAddTodo={this.addTodo} ref={this.todoRef} />
        {todoList.length > 0 ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AsyncTodoList
              handleTodoStatus={this.toggleTodoStatus}
              handleDeleteTodo={this.deleteTodo}
              todoList={todoList}
            />
            <AsyncTodoFilter filterType={filterType} handleChangeFilterStatus={this.loadTodoData} />
          </Suspense>
        ) : (
          <h1>Please add task</h1>
        )}
      </div>
    );
  }
}

export default Todo;
