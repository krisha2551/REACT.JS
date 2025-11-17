import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Card className="p-4 text-center">
      <h2>404 — Page not found</h2>
      <p>We couldn't find that page.</p>
      <Button as={Link} to="/" variant="primary">Go Home</Button>
    </Card>
  );
};

export default ErrorPage;
