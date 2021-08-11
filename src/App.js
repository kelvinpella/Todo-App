import React, { Component } from "react";
import styles from "./App.module.css";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  render() {
    // change size of parent container(#root) for the app
    document.querySelector("#root").setAttribute("class", `${styles.Root}`);
    return (
      <div className={styles.App}>
        <TodoList />
        <footer className={styles.Footer}>by Kelvin</footer>
      </div>
    );
  }
}

export default App;
