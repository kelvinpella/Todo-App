import React, { useState } from "react";
const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const inputChangeHandler = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim().length) {
      props.receiveInputValue(todo);
      setTodo("");
    }
    setTodo("");
  };

  return (
    <div>
      <h1>What's your plan today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="Add Todo"
          value={todo}
          onChange={inputChangeHandler}
        ></input>
        <input type="submit" value="Add Todo"></input>
      </form>
    </div>
  );
};

export default TodoForm;
