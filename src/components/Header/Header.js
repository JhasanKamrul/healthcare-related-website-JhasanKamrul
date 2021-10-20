
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const Header = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand href="#home">medcorder</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#service">Services</Nav.Link>
                            <Nav.Link as={Link} to="/faqs">FAQs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {user?.email ?
                                (<Button onClick={handleLogOut} variant="secondary">Log Out</Button>)

                                :
                                (<Nav.Link as={Link} to="/login">Login</Nav.Link>)
                            }
                            <Navbar.Text>
                                Signed as: {user.displayName}
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </>
    );
};

export default Header;