import React, { Suspense, lazy, useState, useRef, useEffect } from 'react';
import './todoStyle.css';
import TodoForm from './todoForm';

const AsyncTodoList = lazy(() => import(/* webpackChunkName: "todoList" */ './todoList'));
const AsyncTodoFilter = lazy(() => import(/* webpackChunkName: "todoFilter" */ './todoFilter'));

// class Todo extends PureComponent {
//   state = {
//     todoList: [],
//     filterType: 'all',
//     status: [],
//   };

//   todoRef = createRef();

//   async componentDidMount() {
//     this.loadTodoData('all');
//   }

//   showLoader = (type, id = -1) => {
//     this.setState(({ status }) => {
//       const index = status.findIndex((x) => x.type === type && x.id === id);
//       if (index === -1) {
//         return {
//           status: [...status, { type, status: 'request', id }],
//         };
//       }
//       return {
//         status: [
//           ...status.slice(0, index),
//           { type, status: 'request' },
//           ...status.slice(index + 1),
//         ],
//       };
//     });
//   };

//   removeLoader = (type, id = -1) => {
//     this.setState(({ status }) => ({
//       status: status.filter((x) => !(x.type === type && x.id === id)),
//     }));
//   };

//   showError = (type, payload, id = -1) => {
//     this.setState(({ status }) => ({
//       status: status.map((x) =>
//         x.type === type && x.id === id ? { ...x, status: 'fail', payload } : x,
//       ),
//     }));
//   };

//   loadTodoData = async (filterType) => {
//     const type = 'fetch';
//     try {
//       this.showLoader(type);
//       let url = 'http://localhost:3000/todo-list';
//       if (filterType !== 'all') {
//         url = `${url}?isDone=${filterType === 'completed'}`;
//       }

//       const res = await fetch(url);
//       const todoList = await res.json();
//       this.setState({
//         todoList,
//         filterType,
//       });
//       this.removeLoader(type);
//     } catch (error) {
//       this.showError(type, error);
//     }
//   };

//   addTodo = async (event) => {
//     const type = 'add';
//     try {
//       event.preventDefault();
//       this.showLoader(type);
//       const text = this.todoRef.current.value;
//       if (!text) throw new Error('Please enter text');
//       const data = {
//         text,
//         isDone: false,
//       };
//       const res = await fetch('http://localhost:3000/todo-list', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       });

//       const json = await res.json();
//       this.setState(
//         ({ todoList }) => ({
//           todoList: [...todoList, json],
//         }),
//         () => {
//           this.todoRef.current.value = '';
//           this.removeLoader(type);
//         },
//       );
//     } catch (error) {
//       this.showError(type, error);
//     }
//   };

//   toggleTodoStatus = async (item) => {
//     const type = 'update';
//     try {
//       this.showLoader(type, item.id);
//       const res = await fetch(`http://localhost:3000/todo-list/${item.id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//           ...item,
//           isDone: !item.isDone,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       });

//       const json = await res.json();

//       this.setState(({ todoList }) => ({
//         todoList: todoList.map((element) => {
//           if (element.id === item.id) {
//             return json;
//           }
//           return element;
//         }),
//       }));
//       this.removeLoader(type, item.id);
//     } catch (error) {
//       this.showError(type, error, item.id);
//     }
//   };

//   deleteTodo = async (item) => {
//     const type = 'delete';
//     try {
//       this.showLoader(type, item.id);
//       await fetch(`http://localhost:3000/todo-list/${item.id}`, {
//         method: 'DELETE',
//       });
//       this.setState(({ todoList }) => ({
//         todoList: todoList.filter((x) => x.id !== item.id),
//       }));
//       this.removeLoader(type, item.id);
//     } catch (error) {
//       this.showError(type, error, item.id);
//     }
//   };

//   render() {
//     const { filterType, todoList, status } = this.state;

//     if (status.some((x) => x.type === 'fetch' && x.status === 'request')) {
//       return <h1 className="loading">Loading....</h1>;
//     }

//     if (status.some((x) => x.type === 'fetch' && x.status === 'fail')) {
//       return (
//         <div className="error-section">
//           <h1 className="error">Something went wrong pls try after sometime.</h1>
//           <button type="button" onClick={() => this.loadTodoData('all')}>
//             Retry
//           </button>
//         </div>
//       );
//     }

//     return (
//       <div className="container">
//         {status.some((x) => x.type !== 'fetch' && x.status === 'fail') && (
//           <div className="toast">
//             <h1 className="error">Something went wrong pls try after sometime.</h1>
//           </div>
//         )}
//         <h1>Todo App</h1>
//         <TodoForm handleAddTodo={this.addTodo} ref={this.todoRef} status={status} />
//         {todoList.length > 0 ? (
//           <Suspense fallback={<h1>Loading...</h1>}>
//             <AsyncTodoList
//               handleTodoStatus={this.toggleTodoStatus}
//               handleDeleteTodo={this.deleteTodo}
//               todoList={todoList}
//               status={status}
//             />
//             <AsyncTodoFilter filterType={filterType} handleChangeFilterStatus={this.loadTodoData} />
//           </Suspense>
//         ) : (
//           <h1>Please add task</h1>
//         )}
//       </div>
//     );
//   }
// }

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [status, setStatus] = useState([]);

  const todoRef = useRef(null);

  const showLoader = (type, id = -1) => {
    setStatus((val) => {
      const index = val.findIndex((x) => x.type === type && x.id === id);
      if (index === -1) {
        return [...val, { type, status: 'request', id }];
      }
      return [...val.slice(0, index), { type, status: 'request' }, ...val.slice(index + 1)];
    });
  };

  const removeLoader = (type, id = -1) => {
    setStatus((val) => val.filter((x) => !(x.type === type && x.id === id)));
  };

  const showError = (type, payload, id = -1) => {
    setStatus((val) =>
      val.map((x) => (x.type === type && x.id === id ? { ...x, status: 'fail', payload } : x)),
    );
  };

  const loadTodoData = async (ft) => {
    const type = 'fetch';
    try {
      showLoader(type);
      let url = 'http://localhost:3000/todo-list';
      if (ft !== 'all') {
        url = `${url}?isDone=${ft === 'completed'}`;
      }
      const res = await fetch(url);
      const json = await res.json();
      setTodoList(json);
      setFilterType(ft);
      removeLoader(type);
    } catch (error) {
      showError(type, error);
    }
  };

  useEffect(() => {
    loadTodoData('all');
  }, []);

  const addTodo = async (event) => {
    const type = 'add';
    try {
      event.preventDefault();
      showLoader(type);
      const text = todoRef.current.value;
      if (!text) throw new Error('Please enter text');
      const data = {
        text,
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
      setTodoList([...todoList, json]);
      todoRef.current.value = '';
      removeLoader(type);
    } catch (error) {
      showError(type, error);
    }
  };

  const toggleTodoStatus = async (item) => {
    const type = 'update';
    try {
      showLoader(type, item.id);
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

      setTodoList(
        todoList.map((element) => {
          if (element.id === item.id) {
            return json;
          }
          return element;
        }),
      );

      removeLoader(type, item.id);
    } catch (error) {
      showError(type, error, item.id);
    }
  };

  const deleteTodo = async (item) => {
    const type = 'delete';
    try {
      showLoader(type, item.id);
      await fetch(`http://localhost:3000/todo-list/${item.id}`, {
        method: 'DELETE',
      });
      setTodoList((val) => val.filter((x) => x.id !== item.id));
      removeLoader(type, item.id);
    } catch (error) {
      showError(type, error, item.id);
    }
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm handleAddTodo={addTodo} ref={todoRef} status={status} />
      {todoList.length > 0 ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <AsyncTodoList
            handleTodoStatus={toggleTodoStatus}
            handleDeleteTodo={deleteTodo}
            todoList={todoList}
            status={status}
          />
          <AsyncTodoFilter filterType={filterType} handleChangeFilterStatus={loadTodoData} />
        </Suspense>
      ) : (
        <h1>Please add task</h1>
      )}
    </div>
  );
};

export default Todo;
