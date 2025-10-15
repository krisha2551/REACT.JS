import React from "react";

const InlineForm = () => {
  const formStyle = {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    width: "280px",
    margin: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <form style={formStyle}>
      <h3>Inline Styled Form</h3>
      <input type="text" placeholder="Name" style={inputStyle} />
      <input type="email" placeholder="Email" style={inputStyle} />
      <textarea placeholder="Message" style={inputStyle}></textarea>
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default InlineForm;
