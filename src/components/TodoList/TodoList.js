import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
  state = { todo: [] };
  handleIncomingValue = (incomingValue) => {
    let newTodo = this.state.todo.concat(incomingValue);
    this.setState({ todo: newTodo });
  };
  deleteTodo = (id) => {
    let todoCopy = [...this.state.todo];
    todoCopy.splice(id, 1);
    this.setState({ todo: todoCopy });
  };

  render() {
    const { todo } = this.state;
    return (
      <>
        <TodoForm receiveInputValue={this.handleIncomingValue} />
        {todo.length > 0 &&
          todo.map((todoItem, index) => {
            return (
              <TodoItem
                key={index}
                todo={todoItem}
                deleteTodo={() => this.deleteTodo(index)}
              />
            );
          })}
      </>
    );
  }
}

export default TodoList;
