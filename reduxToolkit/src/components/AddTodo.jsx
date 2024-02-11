import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoToList = (e) => {
    console.log(input);
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoToList}>
        <input
          type="text"
          placeholder="Write Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 m-7 rounded-lg border-solid border-2 border-black"
        />
        <button
          type="submit"
          className="p-2 rounded border-solid border-2 border-black"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
