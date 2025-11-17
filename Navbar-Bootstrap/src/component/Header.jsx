import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>MyApp</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/service">
              <Nav.Link>Service</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Products" id="products-dropdown">
              <LinkContainer to="/product/1"><NavDropdown.Item>Product 1</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/product/2"><NavDropdown.Item>Product 2</NavDropdown.Item></LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
