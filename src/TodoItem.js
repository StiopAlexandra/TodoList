import React from "react";

export default function TodoItem(props) {
  return (
    <div
      style={{
        background: "lightgray",
        padding: "5px",
        borderBottom: "1px #ccc dotted",
        textDecoration: props.completed ? "line-through" : "initial",
      }}
    >
      <p>
        <input
          type="checkbox"
          id={props.id}
          defaultChecked={props.completed}
          onChange={() => props.markComplete(props.id)}
        />{" "}
        {props.title}
        <button
          type="button"
          className="Btn"
          style={{ background: "red" }}
          onClick={() => props.delTodo(props.id)}
        >
          Delete
        </button>
      </p>
    </div>
  );
}
