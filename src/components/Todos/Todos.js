import React from 'react';
import { List, Row, Col } from 'antd';
import { TodoConsumer } from '../../contexts/TodoContext';
import Todo from './Todo';

const Todos = ({ todos }) => {
  return (
    <Row>
      <Col xs={24} sm={24} md={{ span: 12, offset: 6 }}>
        <List
          bordered
          className="todo-list"
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={item => <Todo todo={item} />}
          locale={{ emptyText: 'No Todos' }}
        />
      </Col>
    </Row>
  );
};

const TodosConnect = props => {
  return <TodoConsumer>{({ state }) => <Todos todos={state.todos} {...props} />}</TodoConsumer>;
};

export default TodosConnect;
