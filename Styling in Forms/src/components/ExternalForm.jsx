import React from "react";
import "./ExternalForm.css";

const ExternalForm = () => {
  return (
    <form className="form">
      <h3>External Styled Form</h3>
      <input type="text" placeholder="Name" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <textarea placeholder="Message" className="input"></textarea>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default ExternalForm;
