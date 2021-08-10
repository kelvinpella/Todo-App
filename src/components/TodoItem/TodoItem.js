import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = (props) => {
  return (
    <di>
      <p>
        {props.todo}
        <span>
          <BiEditAlt />
        </span>
        <span>
          <AiOutlineDelete />
        </span>
      </p>
    </di>
  );
};

export default TodoItem;
