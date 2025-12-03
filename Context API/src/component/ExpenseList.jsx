import React, { useContext, useState } from "react";
import { expense } from "./ExpenseContext";
import { Table, Button, Form, Row, Col, Card } from "react-bootstrap";

const ExpenseList = () => {
  const { list, update, deleteData } = useContext(expense);

  const [expenseQuery, setExpenseQuery] = useState({
    search: "",
    type: "all",
    category: "all",
    sortedBy: "latest",
  });

  const handleQuery = (identifier, e) => {
    setExpenseQuery((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const filterList = list
    .filter((l) =>
      l.title.toLowerCase().includes(expenseQuery.search.toLowerCase())
    )
    .filter((l) => (expenseQuery.type === "all" ? true : l.type === expenseQuery.type))
    .filter((l) => (expenseQuery.category === "all" ? true : l.category === expenseQuery.category));

  const sortedList = [...filterList].sort((a, b) => {
    if (expenseQuery.sortedBy === "latest") {
      return b.id - a.id; 
    }
    if (expenseQuery.sortedBy === "oldest") {
      return a.id - b.id; 
    }
    if (expenseQuery.sortedBy === "ascending") {
      return Number(a.amount) - Number(b.amount);
    }
    if (expenseQuery.sortedBy === "descending") {
      return Number(b.amount) - Number(a.amount);
    }
    return 0;
  });

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Row className="g-2">
            <Col md={4}>
              <Form.Control
                type="text"
                value={expenseQuery.search}
                placeholder="Search by title"
                onChange={(e) => handleQuery("search", e)}
              />
            </Col>

            <Col md={2}>
              <Form.Select value={expenseQuery.type} onChange={(e) => handleQuery("type", e)}>
                <option value="all">All types</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </Form.Select>
            </Col>

            <Col md={2}>
              <Form.Select value={expenseQuery.category} onChange={(e) => handleQuery("category", e)}>
                <option value="all">All categories</option>
                <option value="general">General</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
              </Form.Select>
            </Col>

            <Col md={2}>
              <Form.Select value={expenseQuery.sortedBy} onChange={(e) => handleQuery("sortedBy", e)}>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="ascending">Amount Asc</option>
                <option value="descending">Amount Desc</option>
              </Form.Select>
            </Col>

            <Col md={2}>
              <div className="text-end">
                <small className="text-muted">Total: {sortedList.length}</small>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
            <th style={{ width: "140px" }} colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedList.length > 0 ? (
            sortedList.map((l) => (
              <tr key={l.id}>
                <td>{l.title}</td>
                <td>{l.amount}</td>
                <td>{l.type}</td>
                <td>{l.category}</td>
                <td>
                  <Button size="sm" onClick={() => update(l.id)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button size="sm" variant="danger" onClick={() => deleteData(l.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ExpenseList;
