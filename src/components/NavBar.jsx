import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" className='w-100'>
            <Container>
                <Navbar.Brand>Hero App</Navbar.Brand>
                <Nav className="me-auto">
                    <SearchBar />
                </Nav>
            </Container>
        </Navbar>
    )
}
