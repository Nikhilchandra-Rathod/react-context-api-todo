import React from 'react';
import { TodoConsumer } from '../../contexts/TodoContext';
import Todo from './Todo';

const Todos = ({ todos }) => {
  return <ul className="list-group">{todos.map(todo => <Todo key={todo.id} todo={todo} />)}</ul>;
};

const TodosConnect = props => {
  return (
    <TodoConsumer>{({ state, actions }) => <Todos todos={state.todos} {...props} />}</TodoConsumer>
  );
};

export default TodosConnect;
