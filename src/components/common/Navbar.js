import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { TodoConsumer } from '../../contexts/TodoContext';

const { Header } = Layout;

export default () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <TodoConsumer>
        {({ actions }) => (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              Todos <Badge count={actions.getUndoneTodos().length} />
            </Menu.Item>
          </Menu>
        )}
      </TodoConsumer>
    </Header>
  );
};
