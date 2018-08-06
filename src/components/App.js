import React, { Component } from 'react';
import { TodoProvider } from '../contexts/TodoContext';

class App extends Component {
  render() {
    return (
      <TodoProvider>
        <div className="App">
          <h1>React Context Api Todos</h1>
        </div>
      </TodoProvider>
    );
  }
}

export default App;
