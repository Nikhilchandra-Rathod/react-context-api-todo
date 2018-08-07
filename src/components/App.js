import React, { Component } from 'react';
import { Layout } from 'antd';
import { TodoProvider } from '../contexts/TodoContext';
import Navbar from './common/Navbar';
import TodoForm from './Todos/TodoForm';
import Todos from './Todos/Todos';

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <TodoProvider>
          <Navbar />
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <TodoForm />
            <Todos />
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2018 Created by Nikhilchandra Rathod</Footer>
        </TodoProvider>
      </Layout>
    );
  }
}

export default App;
