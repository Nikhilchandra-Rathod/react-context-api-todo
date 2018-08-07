import React from 'react';
import { List, Popconfirm } from 'antd';
import { TodoConsumer } from '../../contexts/TodoContext';

const Todo = ({ todo, onRemoveTodo }) => {
  return (
    <List.Item
      actions={[
        <Popconfirm title="Are you sure delete this todo?" onConfirm={() => onRemoveTodo(todo.id)}>
          <a>remove</a>
        </Popconfirm>
      ]}
    >
      <div>{todo.title}</div>
    </List.Item>
  );
};

const TodoConnect = props => {
  return (
    <TodoConsumer>
      {({ actions }) => <Todo onRemoveTodo={actions.onRemoveTodo} {...props} />}
    </TodoConsumer>
  );
};

export default TodoConnect;
