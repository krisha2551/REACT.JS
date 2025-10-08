import { useEffect, useState } from "react";
import "./LifeCycle.css"; // ✅ Import CSS file

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Effect triggered: count changed");

    return () => {
      console.log("Cleanup: component will unmount");
    };
  }, [count]);

  return (
    <div className="lifecycle-container">
      <h2 className="lifecycle-title">React useEffect Lifecycle</h2>

      <div className="counter-section">
        <h3>Count: {count}</h3>
        <button
          className="btn-increase"
          onClick={() => setCount((count) => count + 1)}
        >
          Increase
        </button>
      </div>

      <div className="input-section">
        <label htmlFor="name">Enter Text:</label>
        <input
          id="name"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
        />
        <p className="output-text">{input}</p>
      </div>
    </div>
  );
};

export default LifeCycle;
