import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import RBNavbar from "react-bootstrap/Navbar";

function NavbarMenu() {
  return (
    <RBNavbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <RBNavbar.Brand href="#home">Wanderlust</RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}

export default NavbarMenu;
