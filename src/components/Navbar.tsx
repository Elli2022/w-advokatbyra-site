import { Link } from "react-router-dom";
import Title from "./Title";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

function NavbarComponent() {
  return (
    <BootstrapNavbar
      expand="lg"
      variant="dark"
      className="site-nav"
      sticky="top"
    >
      <BootstrapNavbar.Brand as={Link} to="/" className="site-nav__brand">
        <Title />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle
        aria-controls="site-navbar-nav"
        className="site-nav__toggle"
      />
      <BootstrapNavbar.Collapse id="site-navbar-nav">
        <Nav className="ms-auto site-nav__links">
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
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default NavbarComponent;
