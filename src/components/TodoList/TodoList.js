import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import UpdateTodo from "../UpdateTodo/UpdateTodo";
import styles from "./TodoList.module.css";

class TodoList extends Component {
  state = { todo: [] };
  todoRef = React.createRef();
  updateRef = React.createRef();
  handleIncomingValue = (incomingValue) => {
    let newTodo = [...this.state.todo];
    const id = incomingValue.id;
    const value = incomingValue.value;
    // re-render todo at same exact previous position if updated
    if (typeof id === "number") {
      newTodo.splice(id, 1, value);
    } else {
      newTodo = newTodo.concat(value);
    }
    this.setState({ todo: newTodo });
  };
  deleteTodo = (id) => {
    let todoCopy = [...this.state.todo];
    todoCopy.splice(id, 1);
    this.setState({ todo: todoCopy });
  };
  updateTodo = (id) => {
    // open backdrop
    const app = document.querySelector("#root").firstChild;
    const backdrop = app.firstChild;
    backdrop.style.cssText =
      "width:100vw;height:100vh;z-index:100;background-color:#000;";

    let todoCopy = [...this.state.todo];
    todoCopy.splice(
      id,
      1,
      <UpdateTodo
        ref={this.updateRef}
        id={id}
        value={todoCopy[id]}
        receiveUpdateValue={this.handleIncomingValue}
      />
    );
    this.setState({ todo: todoCopy });
  };

  render() {
    const { todo } = this.state;
    let renderedContent;
    if (todo.length > 0) {
      renderedContent = todo.map((todoItem, index) => {
        return (
          <li key={index}>
            <TodoItem
              todo={todoItem}
              deleteTodo={() => this.deleteTodo(index)}
              updateTodo={() => this.updateTodo(index)}
            />
          </li>
        );
      });
    }
    return (
      <>
        <TodoForm
          ref={this.todoRef}
          receiveInputValue={this.handleIncomingValue}
        />
        <div className={styles.OuterListContainer}>
          <ol className={styles.ListContainer}>{renderedContent}</ol>
        </div>
      </>
    );
  }
}

export default TodoList;
