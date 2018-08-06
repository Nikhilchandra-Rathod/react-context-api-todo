import React from 'react';
import { TodoConsumer } from '../../contexts/TodoContext';

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <TodoConsumer>
        {({ state, actions }) => (
          <a className="navbar-brand" href="/">
            Todos <span className="badge badge-primary badge-pill">{state.todos.length}</span>
          </a>
        )}
      </TodoConsumer>
    </nav>
  );
};
