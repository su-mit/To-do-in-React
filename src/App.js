import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  // Run only once, when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //FUnctions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
    }
  };

  // Saving
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoFromLocal);
      setTodos(todoFromLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Sumit's TODO List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
