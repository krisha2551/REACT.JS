import { useState } from "react";
import InputForm from "./InputForm";
import ListTodo from "./ListTodo";
import "./App.css";

const App = () => {
  const initialValues = [
    { id: 1, task: "learn", description: "learn react in detail" },
    { id: 2, task: "practice", description: "practice react concepts" },
  ];

  const [todoData, setTodoData] = useState(initialValues);

  const addTodo = (input) => {
    if (!input.task.trim() || !input.description.trim()) return;
    const newData = {
      id: Date.now(),
      task: input.task,
      description: input.description,
    };
    setTodoData((prev) => [...prev, newData]);
  };

  return (
    <div className="app-container">
      <h1 className="title">📝 Todo App</h1>
      <InputForm addTodo={addTodo} />
      <ListTodo todo={todoData} />
    </div>
  );
};

export default App;
