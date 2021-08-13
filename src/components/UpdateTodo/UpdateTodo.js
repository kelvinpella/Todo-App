import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
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
      backdrop.remove();
    }
    setUpdate("");
  };
  const handleCancelUpdate = () => {
    props.receiveUpdateValue({ id: props.id, value: props.value });
    setUpdate("");
    backdrop.remove();
  };
  // create backdrop and click eventlistener on every re-render
  const backdrop = document.querySelector("#backdrop");
  backdrop.addEventListener("click", handleCancelUpdate);
  return (
    <div className={styles.UpdateContainer}>
      <input
        type="text"
        ref={ref}
        onChange={handleInputChange}
        value={update}
        maxLength="27"
      ></input>
      <div className={styles.UpdateCancelIcons}>
        <div onClick={handleUpdate}>
          <FaCheck />
        </div>
        <div onClick={handleCancelUpdate}>
          <ImCross />
        </div>
      </div>
    </div>
  );
});

export default UpdateTodo;
