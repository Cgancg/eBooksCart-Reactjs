import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavigationBar = ({size, setShow}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/" className="nav-link" onClick={()=>setShow(true)}>
              Home
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="/contact-us" className="nav-link">
              Contact Us
            </Link>
            
            <Link to="/cart" className="nav-link-cart" id="CartId" onClick={()=>setShow(false)}>
               <i class="fa-solid fa-cart-shopping fa-2xl"></i>
               <span className="cart-count">{size}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};