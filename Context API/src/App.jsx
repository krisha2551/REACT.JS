import React from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseContext from "./component/ExpenseContext";
import ExpenseList from "./component/ExpenseList";

const App = () => {
  return (
    <>
      <ExpenseContext>
        <ExpenseForm />
        <ExpenseList />
      </ExpenseContext>
    </>
  );
};

export default App;