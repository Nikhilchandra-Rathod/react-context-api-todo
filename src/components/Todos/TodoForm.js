import React, { Component } from 'react';
import { Input, Form, Icon, Button, Row, Col } from 'antd';
import { TodoConsumer } from '../../contexts/TodoContext';

const FormItem = Form.Item;

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: ''
    };
  }

  handleChangeText = e => {
    this.setState({ todoText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onNewTodo && this.props.onNewTodo(this.state.todoText);
    this.setState({
      todoText: ''
    });
  };

  render() {
    const { todoText } = this.state;
    return (
      <Row style={{ marginTop: 30 }}>
        <Col xs={24} sm={24} md={{ span: 12, offset: 6 }}>
          <Form onSubmit={this.handleSubmit}>
            <Row gutter={16}>
              <Col xs={18} sm={18} md={20}>
                <FormItem>
                  <Input
                    type="text"
                    prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Enter todo.."
                    value={todoText}
                    onChange={this.handleChangeText}
                  />
                </FormItem>
              </Col>
              <Col xs={6} sm={6} md={4}>
                <FormItem>
                  <Button type="primary" block>
                    Add
                  </Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

const TodoFormConnect = props => {
  return (
    <TodoConsumer>
      {({ actions }) => <TodoForm onNewTodo={actions.onNewTodo} {...props} />}
    </TodoConsumer>
  );
};

export default TodoFormConnect;
