import React, { useState} from "react"
import './App.css';

import Form from "./Components/Form"
import TodoList from "./Components/TodoList"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>     
  <h1>Sumit's TODO List</h1>
      </header>
    <Form setInputText = {setInputText}/>
    <TodoList/>
    </div>
  );
}

export default App;
