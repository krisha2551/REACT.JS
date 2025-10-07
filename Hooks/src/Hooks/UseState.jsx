import { useState } from "react";

const UseState = () => {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter((count) => count + 1);
  };

  const styles = {
    container: {
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      padding: "10px",
      width: "250px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "16px",
    },
    heading: {
      color: "#333",
      marginTop: "20px",
    },
    counterBox: {
      marginTop: "20px",
      fontSize: "22px",
      color: "#444",
      fontWeight: "bold",
    },
    button: {
      padding: "10px 20px",
      margin: "10px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#007bff",
      color: "white",
      cursor: "pointer",
      fontSize: "16px",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Please enter your name"
        style={styles.input}
      />

      <h1 style={styles.heading}>{input}</h1>

      <div style={styles.counterBox}>Counter: {counter}</div>

      <div>
        <button
          style={{
            ...styles.button,
            backgroundColor: "#28a745",
          }}
          onClick={handleIncrease}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
        >
          Increase
        </button>

        <button
          style={{
            ...styles.button,
            backgroundColor: "#dc3545",
          }}
          onClick={() => setCounter((count) => count - 1)}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default UseState;
