import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <Card className="p-4">
      <h1>Product — {id}</h1>

      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3" controlId="productInput">
          <Form.Label>Enter something</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type here..."
          />
        </Form.Group>

        <Button type="submit" variant="success">Submit</Button>
      </Form>
    </Card>
  );
};

export default Product;
