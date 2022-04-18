import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo1.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ps-5">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <Nav.Link href="#gallery">Gallery</Nav.Link>
                            <Nav.Link href="#pages">Pages</Nav.Link>
                            <Nav.Link href="#blogs">Blogs</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Get Appointed</Nav.Link>
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;