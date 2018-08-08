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

  getUndoneTodos = () => {
    return this.state.todos.filter(t => !t.isDone);
  };

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

  handleRemoveTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  handleToggleTodo = (id, done) => {
    this.setState(prevState => {
      const todos = [...prevState.todos];
      const todo = todos.find(t => t.id === id);
      const index = todos.indexOf(todo);
      todo.isDone = done;

      return {
        todos: [...todos.slice(0, index), { ...todo }, ...todos.slice(index + 1)]
      };
    });
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          state: this.state,
          actions: {
            onNewTodo: this.handleNewTodo,
            onRemoveTodo: this.handleRemoveTodo,
            onToggleTodo: this.handleToggleTodo,
            getUndoneTodos: this.getUndoneTodos
          }
        }}
        {...this.props}
      />
    );
  }
}
