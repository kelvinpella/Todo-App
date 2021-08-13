import React, { Component } from "react";
import styles from "./App.module.css";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Backdrop}></div>
        <TodoList />
        <footer className={styles.Footer}>by Kelvin</footer>
      </div>
    );
  }
}

export default App;
