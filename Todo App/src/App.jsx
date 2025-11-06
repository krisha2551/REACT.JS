import React, { useState } from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

const App = () => {
  const [todoData, setTodoData] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: Date.now(),
      task: input.task,
      description: input.description,
    };

    setTodoData((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodoData((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Simple Todo App 📝</h1>
      <InputForm addTodo={addTodo} />
      <hr />
      <TodoList todoData={todoData} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
