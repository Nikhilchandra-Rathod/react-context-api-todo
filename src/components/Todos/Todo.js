import React from 'react';
import { List, Popconfirm, Checkbox } from 'antd';
import { TodoConsumer } from '../../contexts/TodoContext';

const Todo = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <List.Item
      actions={[
        <Popconfirm title="Are you sure delete this todo?" onConfirm={() => onRemoveTodo(todo.id)}>
          <a>remove</a>
        </Popconfirm>
      ]}
    >
      <Checkbox checked={todo.isDone} onChange={e => onToggleTodo(todo.id, e.target.checked)}>
        {todo.title}
      </Checkbox>
    </List.Item>
  );
};

const TodoConnect = props => {
  return (
    <TodoConsumer>
      {({ actions }) => (
        <Todo onToggleTodo={actions.onToggleTodo} onRemoveTodo={actions.onRemoveTodo} {...props} />
      )}
    </TodoConsumer>
  );
};

export default TodoConnect;
