import React from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseContext from "./component/ExpenseContext";

const App = () => {
  return (
    <>
      <ExpenseContext>
        <ExpenseForm />
      </ExpenseContext>
    </>
  );
};

export default App;
