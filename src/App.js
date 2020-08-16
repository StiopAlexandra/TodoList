import React, { useState } from "react";
import TodoItem from "./TodoItem";
import FilterButton from "./FilterButton";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";

const FILTER_MAP = {
  All: () => true,
  Active: (todos) => !todos.completed,
  Completed: (todos) => todos.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [todos, setTodos] = useState(props.todos);
  const [filter, setFilter] = useState("All");

  function markComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function delTodo(id) {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  function addTodo(title) {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  const todosList = todos
    .filter(FILTER_MAP[filter])
    .map((todo) => (
      <TodoItem
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        key={todo.id}
        markComplete={markComplete}
        delTodo={delTodo}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodo addTodo={addTodo} />
      {todosList}
      <span className="filter">{filterList}</span>
    </div>
  );
}

export default App;
