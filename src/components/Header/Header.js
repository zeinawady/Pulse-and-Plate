import React from 'react';
import './Header.css';
import '../../App';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUser } from "../../UserContext";
// Reactstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import the FontAwesomeIcon component


export default function Header() {
    const { user, setUser } = useUser();
    const [isLoggedIn, setIsLoggedIn] = useState(!!user);

    useEffect(() => {
        setIsLoggedIn(!!user);
    }, [user]);

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
                        <Nav.Link as={NavLink} to="/menu" className="nav-link">Menu</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="nav-link">About</Nav.Link>
                        {/* <Nav.Link as={NavLink} to="/contactus" className="nav-link">Contact Us</Nav.Link> */}
                        <Nav.Link as={NavLink} to="/category" className="nav-link">Categories</Nav.Link>
                    </Nav>

                    <div className='icons'>
                        <FontAwesomeIcon icon="cart-shopping" />
                        <Button as={Link} to={user?.name ? "/userAccount" : "/login"}>
                            {user?.name ? `${user.name.split(" ")[0]} Profile` : "Login | Register"}
                        </Button>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
