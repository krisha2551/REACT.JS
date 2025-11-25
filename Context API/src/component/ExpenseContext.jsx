import { createContext, useState } from "react";

export const expense = createContext({
  add: () => {},
  list: () => {},
  update: () => {},
  delete: () => {},
});

const ExpenseContext = ({ children }) => {
  const initialState = [
    {
      id: 1,
      title: "burger",
      amount: "500",
      category: "food",
      type: "debit",
    },
  ];

  const [data, setData] = useState(initialState);

  const add = (input) => {
    const newData = {
      id: Date.now(),
      title: input.title,
      amount: input.amount,
      category: input.category,
      type: input.type,
    };

    setData((prev) => [...prev, newData]);
  };

  return (
    <expense.Provider value={{ data, add }}>
      {children}
    </expense.Provider>
  );
};

export default ExpenseContext;
