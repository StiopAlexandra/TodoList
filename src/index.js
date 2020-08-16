import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const todos = [
  {
    id: uuidv4(),
    title: "Go to the gym",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Finish the assignment",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Read a book",
    completed: false,
  },
];

ReactDOM.render(<App todos={todos} />, document.getElementById("root"));
