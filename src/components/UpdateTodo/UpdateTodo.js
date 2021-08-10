import React, { useState } from "react";
const UpdateTodo = (props) => {
  const [update, setUpdate] = useState(props.value);
  const handleInputChange = (e) => {
    setUpdate(e.target.value);
  };
  const handleUpdate = () => {
    if (update.trim().length) {
      props.receiveUpdateValue({ id: props.id, value: update });
      setUpdate("");
    }
    setUpdate("");
  };
  const handleCancelUpdate = () => {
    props.receiveUpdateValue({ id: props.id, value: props.value });
    setUpdate("");
  };
  return (
    <>
      <input type="text" onChange={handleInputChange} value={update}></input>
      <input type="button" value="Update" onClick={handleUpdate}></input>
      <input type="button" value="Cancel" onClick={handleCancelUpdate}></input>
    </>
  );
};

export default UpdateTodo;
