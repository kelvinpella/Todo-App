import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <footer>by Kelvin</footer>
      </div>
    );
  }
}

export default App;
