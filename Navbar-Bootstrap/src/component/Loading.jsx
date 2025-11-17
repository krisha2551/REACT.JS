import React from "react";
import { Spinner, Container } from "react-bootstrap";

export default function ModernLoader() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <div className="text-center">
        <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div className="mt-2 text-muted">Loading...</div>
      </div>
    </Container>
  );
}
