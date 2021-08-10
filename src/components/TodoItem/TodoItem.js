import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = (props) => {
  // conditional rendering of todo string and updateTodo component
  let renderedContent;
  if (typeof props.todo === "string") {
    renderedContent = (
      <div>
        <p>{props.todo}</p>
        <div onClick={props.updateTodo}>
          <BiEditAlt />
        </div>
        <div onClick={props.deleteTodo}>
          <AiOutlineDelete />
        </div>
      </div>
    );
  } else {
    renderedContent = props.todo;
  }
  return <>{renderedContent}</>;
};

export default TodoItem;
