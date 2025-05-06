import React from 'react';
import './Header.css';
import '../../App';
import { Link } from 'react-router-dom';
// Reactstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
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
                        <Nav.Link as={NavLink} to="/home" className="nav-link">Home</Nav.Link>
                        <NavDropdown
                            title={<NavLink to="/menu" className="dropdown-link">Menu</NavLink>}
                            id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/menu/salads">Salads</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/menu/grilled">Grilled</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/menu/wraps">Wraps</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={NavLink} to="/about" className="nav-link">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact Us</Nav.Link>
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