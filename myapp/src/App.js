import "./App.css";
import Todo from "./Todo";
import React, { Component } from "react";

class App extends Component {
  state = {
    todoList: [
      {
        id: "1",
        content: "Solve leetcode",
      },
      {
        id: "2",
        content: "Cook food",
      },
      {
        id: "3",
        content: "Do laundry",
      },
      {
        id: "4",
        content: "Apply to jobs",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <h1>Todo App</h1>
        <Todo todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
