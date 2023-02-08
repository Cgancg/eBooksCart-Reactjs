import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useApp } from "../context/AppProvider";

export const NavigationBar = () => {
  const { cart } = useApp();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/" className="nav-link nav-item">
              Home
            </Link>
            <Link to="/about-us" className="nav-link nav-item">
              About Us
            </Link>
            <Link to="/contact-us" className="nav-link nav-item">
              Contact Us
            </Link>

            <Link to="/cart" className="nav-link-cart" id="CartId">
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
              <span className="cart-count">{cart.length}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
