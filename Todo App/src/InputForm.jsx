import React, { useState } from "react";

const InputForm = ({ addTodo }) => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  const handleInputData = (identifier, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(input);

    // clear inputs after adding
    setInput({ task: "", description: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task"
          value={input.task}
          onChange={(e) => handleInputData("task", e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={input.description}
          onChange={(e) => handleInputData("description", e)}
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default InputForm;
