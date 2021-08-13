import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import UpdateTodo from "../UpdateTodo/UpdateTodo";
import styles from "./TodoList.module.css";

class TodoList extends Component {
  state = { todo: [] };
  todoFormRef = React.createRef();
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
    document.querySelector("ol").children[id].animate(
      [
        { transform: "translateY(20px)", opacity: 0 },
        { transform: "translateY(0px)", opacity: 1 },
      ],
      {
        duration: 500,
        easing: "ease-in",
      }
    );
  };
  updateTodo = (id) => {
    // create backdrop & apply styles
    const backdrop = document.createElement("div");
    backdrop.setAttribute("id", "backdrop");
    backdrop.style.cssText =
      "position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:100;background-color:#50394c;opacity:0.2";
    backdrop.animate([{ opacity: 0 }, { opacity: 0.2 }], {
      duration: 1000,
      easing: "ease-in-out",
    });
    // append backdrop to App container
    const app = document.querySelector("#root").firstChild;
    app.append(backdrop);

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
          ref={this.todoFormRef}
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
