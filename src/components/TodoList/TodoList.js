import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";

class TodoList extends Component {
  state = { todo: [] };
  handleIncomingValue = (incomingValue) => {
    let newTodo = this.state.todo.concat(incomingValue);
    this.setState({ todo: newTodo }, () => {
      console.log("State is", this.state.todo);
    });
  };

  render() {
    return (
      <>
        <TodoForm receiveInputValue={this.handleIncomingValue} />
      </>
    );
  }
}

export default TodoList;
