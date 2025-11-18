import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarMenu() {
  return (
    <Navbar expand="lg"  className="shadow-sm py-3 bg-body-tertiary">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold fs-3"
          style={{ letterSpacing: "1px" }}
        >
          Travel
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-links" />
        <Navbar.Collapse id="nav-links">
          <Nav className="ms-auto gap-3">
            <Nav.Link className="fw-semibold nav-item-custom" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fw-semibold nav-item-custom" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="fw-semibold nav-item-custom" href="#service">
              Service
            </Nav.Link>
            <Nav.Link className="fw-semibold nav-item-custom" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .nav-item-custom {
          transition: 0.3s ease;
        }
        .nav-item-custom:hover {
          color: #22c55e !important;
          transform: scale(1.05);
        }
      `}</style>
    </Navbar>
  );
}

export default NavbarMenu;
