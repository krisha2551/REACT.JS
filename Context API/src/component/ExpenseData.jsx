import React, { useContext } from "react";
import { expense } from "./ExpenseContext";
import { Card, Row, Col } from "react-bootstrap";

const ExpenseData = () => {
  const { credit, debit, balance } = useContext(expense);

  const stat = [
    { label: "Credit", value: credit },
    { label: "Debit", value: debit },
    { label: "Balance", value: balance },
  ];

  return (
    <Row>
      {stat.map((s) => (
        <Col key={s.label} md={4} className="mb-3">
          <Card>
            <Card.Body className="text-center">
              <Card.Title>{s.label}</Card.Title>
              <Card.Text style={{ fontSize: "1.5rem", fontWeight: "600" }}>{s.value}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ExpenseData;
