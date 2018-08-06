import React, { Component, createContext } from 'react';

const TodoContext = createContext({});

export const TodoConsumer = TodoContext.Consumer;

export class TodoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  handleNewTodo = todoText => {
    this.setState(prevState => {
      const newTodo = {
        id: prevState.todos.length + 1,
        title: todoText,
        isDone: false
      };

      return {
        todos: [...prevState.todos, newTodo]
      };
    });
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          state: this.state,
          actions: {
            addNewTodo: this.handleNewTodo
          }
        }}
        {...this.props}
      />
    );
  }
}
