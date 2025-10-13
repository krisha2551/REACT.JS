import { useState } from "react";

const PassingArguments = ({ propName }) => {
  // --- Ex-2: State input ---
  const [input, setInput] = useState("");

  // Handler for hardcoded and prop values
  const handleClick = (name) => {
    alert(`Hi ${name}`);
  };

  // Handler for state input
  const handleInputClick = () => {
    alert(`Hi ${input}`);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2>Passing Arguments to Event Handlers</h2>

      {/* Ex-1: Hardcoded value */}
      <>
        <button onClick={() => handleClick("Alice")}>Greet Alice</button>
      </>
      <br />

      {/* Ex-2: State input */}
      <>
        <input
          type="text"
          placeholder="Enter your name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleInputClick}>Greet Input Name</button>
      </>
      <br />

      {/* Ex-3: Prop value */}
      <>
        <button onClick={() => handleClick(propName)}>Greet Prop Name</button>
      </>
    </div>
  );
};

export default PassingArguments;
