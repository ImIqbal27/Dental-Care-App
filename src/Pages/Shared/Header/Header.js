import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo1.png'

const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ps-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#about">About Us</Nav.Link>
                        <Nav.Link href="home#gallery">Gallery</Nav.Link>
                        <Nav.Link href="home#pages">Pages</Nav.Link>
                        <Nav.Link href="home#blogs">Blogs</Nav.Link>
                        <Nav.Link href="home#contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="getAppointed">
                            <button>Get Appointed</button>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;