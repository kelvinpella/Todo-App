import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = (props) => {
  return (
    <div>
      <p>
        {props.todo}
        <span>
          <BiEditAlt />
        </span>
        <span onClick={props.deleteTodo}>
          <AiOutlineDelete />
        </span>
      </p>
    </div>
  );
};

export default TodoItem;
