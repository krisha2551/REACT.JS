import React from "react";
import InlineForm from "./components/InlineForm";
import ExternalForm from "./components/ExternalForm";
import ModuleForm from "./components/ModuleForm";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "40px",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* <InlineForm /> */}
      {/* <ExternalForm /> */}
      <ModuleForm />
    </div>
  );
};

export default App;

