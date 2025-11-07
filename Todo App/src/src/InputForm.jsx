import { useState } from "react";

const InputForm = ({ addTodo }) => {
  const [input, setInput] = useState({ task: "", description: "" });

  const handleChange = (key, e) => {
    setInput((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput({ task: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Task"
        value={input.task}
        onChange={(e) => handleChange("task", e)}
        className="input"
      />
      <input
        type="text"
        placeholder="Description"
        value={input.description}
        onChange={(e) => handleChange("description", e)}
        className="input"
      />
      <button type="submit" className="btn add-btn">
        Add
      </button>
    </form>
  );
};

export default InputForm;
