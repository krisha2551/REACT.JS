import React from "react";

const TodoList = ({ todoData, deleteTodo }) => {
  if (todoData.length === 0) {
    return <p>No todos yet! Add one above 👆</p>;
  }

  return (
    <ul>
      {todoData.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "15px" }}>
          <strong>{todo.task}</strong>
          <p>{todo.description}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
  