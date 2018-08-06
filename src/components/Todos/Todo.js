import React from 'react';
import { TodoConsumer } from '../../contexts/TodoContext';

const Todo = ({ todo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.title}
      <span className="badge badge-primary badge-pill">Remove</span>
    </li>
  );
};

const TodoConnect = props => {
  return <TodoConsumer>{({ state, actions }) => <Todo {...props} />}</TodoConsumer>;
};

export default TodoConnect;
