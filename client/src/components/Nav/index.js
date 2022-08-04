

import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

function NavBar(props) {

    if (Auth.loggedIn()) {
        return (
            <Navbar collapseOnSelect expand= "lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to ='/'>Aroma Mocha</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link as={Link} to ='/menu'>Menu</Nav.Link>
              <Nav.Link as={Link} to ='/cart'>Cart</Nav.Link>
              <Nav.Link as={Link} to ='/orderHistory'>History</Nav.Link>
              <Nav.Link as={Link} to ='/' onClick={() => Auth.logout()}>Logout</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    } else {
        return (
            <Navbar collapseOnSelect expand= "lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to ='/'>Aroma Mocha</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
              <Nav className="me-auto">
              <Nav.Link as={Link} to ='/menu'>Menu</Nav.Link>
              <Nav.Link as={Link} to ='/cart'>Cart</Nav.Link>
              <Nav.Link as={Link} to ='/signup'>Signup</Nav.Link>
              <Nav.Link as={Link} to ='/login'>Login</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
   
}
export default NavBar;
