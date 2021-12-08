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
    this.loadTodoData();
  }

  loadTodoData = async () => {
    try {
      const res = await fetch('http://localhost:3000/todo-list');
      const todoList = await res.json();
      this.setState({
        todoList,
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
              {...this.state}
            />
            <AsyncTodoFilter
              filterType={filterType}
              handleChangeFilterStatus={this.changeFilterStatus}
            />
          </Suspense>
        ) : (
          <h1>Please add task</h1>
        )}
      </div>
    );
  }
}

export default Todo;
