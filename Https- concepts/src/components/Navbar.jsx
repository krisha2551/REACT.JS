import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Orders from "./Orders";

function BasicExample({ cartItems, onShow }) {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>
        <Navbar.Brand>Urban-Cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <div className="d-flex gap-3">
              <Button onClick={onShow}>
                <i className="fa-solid fa-cart-shopping me-1"></i>
                Cart <Badge bg="secondary">{cartItems}</Badge>
              </Button>

              <Button variant="outline-primary" onClick={() => setShowOrder(true)}>
                Your Orders
              </Button>

              {showOrder && (
                <Orders show={showOrder} hide={() => setShowOrder(false)} />
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
