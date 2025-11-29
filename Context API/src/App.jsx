import React from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseContext from "./component/ExpenseContext";
import ExpenseList from "./component/ExpenseList";
import ExpenseData from "./component/ExpenseData";

const App = () => {
  return (
    <>
      <ExpenseContext>
        <ExpenseForm />
        <ExpenseData />
        <ExpenseList />
      </ExpenseContext>
    </>
  );
};

export default App;