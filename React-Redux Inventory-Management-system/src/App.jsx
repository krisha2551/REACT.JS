import React from "react";
import { Container } from "react-bootstrap";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <Container className="mt-4">
      <ProductForm />
      <ProductList />
    </Container>
  );
}
