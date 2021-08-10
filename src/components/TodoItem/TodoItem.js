import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = (props) => {
  // prevent rendering wrong icons beside updateTodo
  let renderedContent;
  if (typeof props.todo === "string") {
    renderedContent = (
      <p>
        {props.todo}
        <span onClick={props.updateTodo}>
          <BiEditAlt />
        </span>
        <span onClick={props.deleteTodo}>
          <AiOutlineDelete />
        </span>
      </p>
    );
  } else {
    renderedContent = props.todo;
  }
  return <>{renderedContent}</>;
};

export default TodoItem;
