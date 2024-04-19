import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link text-info" : "nav-link text-white";

  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white">
          Rick and Morty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/personajes" className={getNavLinkClass}>
              Personajes
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
