import React, { Component } from 'react';
import { TodoConsumer } from '../../contexts/TodoContext';

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
      <div className="row">
        <div className="col">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Todo..."
                aria-label="Enter todo"
                value={todoText}
                onChange={this.handleChangeText}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const TodoFormConnect = props => {
  return (
    <TodoConsumer>
      {({ state, actions }) => <TodoForm onNewTodo={actions.addNewTodo} {...props} />}
    </TodoConsumer>
  );
};

export default TodoFormConnect;
