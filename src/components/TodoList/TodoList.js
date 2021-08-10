import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
  state = { todo: [] };
  handleIncomingValue = (incomingValue) => {
    let newTodo = this.state.todo.concat(incomingValue);
    this.setState({ todo: newTodo });
  };

  render() {
    const { todo } = this.state;
    return (
      <>
        <TodoForm receiveInputValue={this.handleIncomingValue} />
        {todo.length > 0 &&
          todo.map((todoItem) => {
            return <TodoItem key={todoItem.id} todo={todoItem.inputValue} />;
          })}
      </>
    );
  }
}

export default TodoList;
