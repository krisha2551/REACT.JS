import React, { useState } from "react";
import "./OnChange.css"; 

const OnChange = () => {
  const [input, setInput] = useState("");

  return (
    <div className="input-container">
      <h2>Type Something 👇</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text here..."
      />

      <h1>{input}</h1>
    </div>
  );
};

export default OnChange;
