import React, { useContext } from "react";
import { expense } from "./ExpenseContext";

const ExpenseData = () => {
  const { credit, debit, balance } = useContext(expense);

  return (
    <>
      <h1>{credit}</h1>

      <h1>{debit}</h1>

      <h1>{balance}</h1>
    </>
  );
};

export default ExpenseData;