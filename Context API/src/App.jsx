import React from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseContext from "./component/ExpenseContext";
import ExpenseList from "./component/ExpenseList";
import ExpenseData from "./component/ExpenseData";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <ExpenseContext>
      <Container className="py-4">
        <Row className="mb-4">
          <Col>
            <h2 className="text-center">Expense Tracker</h2>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={5}>
            <ExpenseForm />
          </Col>
          <Col md={7}>
            <ExpenseData />
          </Col>
        </Row>

        <Row>
          <Col>
            <ExpenseList />
          </Col>
        </Row>
      </Container>
    </ExpenseContext>
  );
};

export default App;
