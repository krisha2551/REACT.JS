import React, { useContext, useEffect, useState } from "react";
import { expense } from "./ExpenseContext";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const ExpenseForm = () => {
  const [input, setInput] = useState({
    title: "",
    amount: 0,
    type: "debit",
    category: "",
  });

  const { add, editValue } = useContext(expense);

  useEffect(() => {
    if (editValue) {
      // ensure amount is a number (or string like before)
      setInput({
        ...editValue,
        amount: editValue.amount,
      });
    }
  }, [editValue]);

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
    add(input);
    setInput({ title: "", amount: 0, type: "debit", category: "" });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{editValue ? "Update Expense" : "Add Expense"}</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={input.title}
              onChange={(e) => handleChange("title", e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={input.amount}
              onChange={(e) => handleChange("amount", e)}
            />
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Type
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                inline
                label="Credit"
                name="type"
                type="radio"
                id="credit"
                value="credit"
                checked={input.type === "credit"}
                onChange={(e) => handleChange("type", e)}
              />
              <Form.Check
                inline
                label="Debit"
                name="type"
                type="radio"
                id="debit"
                value="debit"
                checked={input.type === "debit"}
                onChange={(e) => handleChange("type", e)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={input.category}
              onChange={(e) => handleChange("category", e)}
            >
              <option value="">Select category</option>
              <option value="general">General</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="shopping">Shopping</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            {editValue ? "Update" : "Add"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ExpenseForm;
