import React, { Component } from 'react';
import { TodoProvider } from '../contexts/TodoContext';
import Navbar from './common/Navbar';
import TodoForm from './Todos/TodoForm';
import Todos from './Todos/Todos';

class App extends Component {
  render() {
    return (
      <TodoProvider>
        <Navbar />
        <div className="container">
          <TodoForm />
          <Todos />
        </div>
      </TodoProvider>
    );
  }
}

export default App;
