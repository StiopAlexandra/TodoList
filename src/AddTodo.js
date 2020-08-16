import React, { useState } from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  }

  function onChange(e) {
    setTitle(e.target.value);
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        style={{ flex: "8.5", padding: "5px" }}
        placeholder="Enter a new todo"
        value={title}
        onChange={onChange}
      />
      <button
        type="submit"
        className="Btn"
        style={{ flex: "1.5", background: "gray" }}
      >
        Add
      </button>
    </form>
  );
}
