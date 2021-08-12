import React, { useState, useEffect } from "react";
import styles from "./UpdateTodo.module.css";
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
    <div className={styles.UpdateContainer}>
      <input
        type="text"
        ref={ref}
        onChange={handleInputChange}
        value={update}
        maxLength="27"
      ></input>
      <div className={styles.UpdateCancelButtons}>
        <input type="button" value="Update" onClick={handleUpdate}></input>
        <input
          type="button"
          value="Cancel"
          onClick={handleCancelUpdate}
        ></input>
      </div>
    </div>
  );
});

export default UpdateTodo;
