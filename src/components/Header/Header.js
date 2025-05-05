import React from 'react';
import './Header.css';
import '../../App';
import { Link } from 'react-router-dom';
// Reactstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import the FontAwesomeIcon component


export default function Header() {
    return (
        <Navbar expand="md" className="fixed-top">
            <Container fluid="md">
                {/* Logo */}
                <Navbar.Brand href="#home">
                    <img
                        src="images/logo-trans.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        
                        <NavDropdown title="Recipes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                    </Nav>

                    <div className='icons'>
                        <FontAwesomeIcon icon="cart-shopping" />
                        {/* <Link to="/f" className="login-link">
                            <FontAwesomeIcon icon="user" />
                            <span>Login | Register</span>
                        </Link> */}

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};