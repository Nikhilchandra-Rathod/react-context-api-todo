import React from 'react';
import { TodoConsumer } from '../../contexts/TodoContext';

const Todo = ({ todo, onRemoveTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.title}
      <button className="btn btn-danger btn-sm" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
};

const TodoConnect = props => {
  return (
    <TodoConsumer>
      {({ state, actions }) => <Todo onRemoveTodo={actions.onRemoveTodo} {...props} />}
    </TodoConsumer>
  );
};

export default TodoConnect;
