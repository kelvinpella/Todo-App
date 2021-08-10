import React, { useState, useEffect } from "react";
const TodoForm = React.forwardRef((props, ref) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    ref.current.focus();
  });
  const inputChangeHandler = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim().length) {
      props.receiveInputValue({ id: "", value: todo });
      setTodo("");
    }
    setTodo("");
  };

  return (
    <div>
      <h1>What's your plan today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
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
});

export default TodoForm;
