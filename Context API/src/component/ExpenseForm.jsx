import React, { useContext, useState } from "react";
import { expense } from "./ExpenseContext";

const ExpenseForm = () => {
  const [input, setInput] = useState({
    title: "",
    amount: 0,
    type: "debit",
    category: "",
  });

  const { add } = useContext(expense);

  const handleChange = (identifier, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputData", input);
    add(input);
    setInput({ title: "", amount: 0, type: "", category: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          placeholder="enter title"
          value={input.title}
          onChange={(e) => handleChange("title", e)}
        />
        <br />
        <br />
        <br />
        <label htmlFor="amount">amount</label>
        <input
          type="number"
          placeholder="enter amount"
          value={input.amount}
          onChange={(e) => handleChange("amount", e)}
        />
        <br />
        <br />
        <br />
        <div>
          <span>credit</span>
          <input
            type="radio"
            id="credit"
            name="type"
            value="credit"
            checked={input.type === "credit"}
            onChange={(e) => handleChange("type", e)}
          />
          <span>debit</span>
          <input
            type="radio"
            name="type"
            id="debit"
            value="debit"
            checked={input.type === "debit"}
            onChange={(e) => handleChange("type", e)}
          />
        </div>
        <br />
        <br />
        <br />
        <label htmlFor="category">category</label>
        <select
          name="category"
          id="category"
          value={input.category}
          onChange={(e) => handleChange("category", e)}
        >
          <option value="">select category</option>
          <option value="general">general</option>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
        </select>
        <br />
        <br />
        <br />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default ExpenseForm;