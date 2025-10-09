import React from "react";
import "./OnClick.css"; // ✅ import CSS file

const OnClick = () => {
  const handleClick = () => {
    alert("button clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default OnClick;
