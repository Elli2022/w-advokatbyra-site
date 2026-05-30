import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { Navbar, Nav } from "react-bootstrap"; // Importera relevanta Bootstrap-komponenter

function NavbarComponent() {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Navbar.Brand>
        <Title />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Hem
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            Om oss
          </Nav.Link>
          <Nav.Link as={Link} to="/services">
            Tjänster
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Kontakt
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
