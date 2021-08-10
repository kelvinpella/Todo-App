import React, { useState, useEffect } from "react";
const UpdateTodo = React.forwardRef((props, ref) => {
  const [update, setUpdate] = useState(props.value);

  useEffect(() => {
    ref.current.focus();
  });
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
    <div>
      <input
        type="text"
        ref={ref}
        onChange={handleInputChange}
        value={update}
      ></input>
      <input type="button" value="Update" onClick={handleUpdate}></input>
      <input type="button" value="Cancel" onClick={handleCancelUpdate}></input>
    </div>
  );
});

export default UpdateTodo;
