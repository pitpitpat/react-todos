import React from 'react';

import { GlobalProvider } from './context/globalContext';
import styles from './App.module.css';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import TodoDetails from './TodoDetails/TodoDetails';

export default class App extends React.Component {
  state = {
      todos: [
          {
             id:  '10',
              name: 'Clean',
              description: 'Something aaaaa'
          },
          {
              id:  '11',
              name: 'Wash',
              description: 'Something bbbbbb'
          },
          {
              id:  '12',
              name: 'Study',
              description: 'Something ccccccc'
          }
      ],
      todoDetailsPanel: {
          show: false,
          todoId: null
      }
  };

  addTodoHandler = (name, description) => {
      const newTodo = {
          id: 2,
          name: name,
          description: description
      };

      this.setState((prevState) => {
          return {
              todos: [...prevState.todos, newTodo]
          }
      });
  };

  deleteTodoHandler = (todoId) => {
      this.setState((prevState) => {
          const updatedTodos = prevState.todos.filter(todo => todo.id !== todoId);
          return {
              todos: updatedTodos
          };
      });
  };

  showTodoDetails = (todoId) => {
      this.setState({
          todoDetailsPanel: {
              show: true,
              todoId: todoId
          }
      });
  };

  render() {
      let todoDetailsPanel = null;
      if (this.state.todoDetailsPanel.show) {
          todoDetailsPanel = (
              <div className={styles.todoDetailsPanel}>
                  <TodoDetails todoId={this.state.todoDetailsPanel.todoId}/>
              </div>
          );
      }

      return (
          <GlobalProvider value={{todos: this.state.todos}}>
              <div className={styles.App}>
                  <div className={styles.todosPanel}>
                      <h2 className={styles.todoHeader}>To-Do App</h2>
                      <TodoInput onAddClick={this.addTodoHandler}/>
                      <TodoList todos={this.state.todos} onDetailsClick={this.showTodoDetails} onDeleteClick={this.deleteTodoHandler}/>
                  </div>
                  {todoDetailsPanel}
              </div>
          </GlobalProvider>
      );
  }
}
