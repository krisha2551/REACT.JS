import React, { useContext } from "react";
import { expense } from "./ExpenseContext";

const ExpenseList = () => {
  const { list } = useContext(expense);

  return (
    <>
      <h1>expense data</h1>
      <table border="1px solid black">
        <thead>
          <tr>
            <th>title</th>
            <th>amount</th>
            <th>type</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {list.map((l) => {
            return (
              <tr key={l.id}>
                <td>{l.title}</td>
                <td>{l.amount}</td>
                <td>{l.type}</td>
                <td>{l.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;