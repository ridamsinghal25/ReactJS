import "./App.css";
import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>Learn To Manage Todo</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
