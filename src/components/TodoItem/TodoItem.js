import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  // conditional rendering of todo string and updateTodo component
  let renderedContent;
  if (typeof props.todo === "string") {
    renderedContent = (
      <div className={styles.TodoItemContainer}>
        <p>{props.todo}</p>
        <div>
          <div onClick={props.updateTodo}>
            <BiEditAlt />
          </div>
          <div onClick={props.deleteTodo}>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    );
  } else {
    renderedContent = props.todo;
  }
  return <>{renderedContent}</>;
};

export default TodoItem;
