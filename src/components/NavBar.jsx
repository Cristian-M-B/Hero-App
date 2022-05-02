import React from 'react';
import LogoutButton from './LogoutButton.jsx';
import { useStore } from '../context/StoreProvider.js';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    const { token } = useStore();

    return (
        <Navbar bg="dark" variant="dark" className='w-100'>
            <Container>
                <Navbar.Brand>Hero App</Navbar.Brand>
                <Nav className="me-auto">
                    {token && <LogoutButton />}
                </Nav>
            </Container>
        </Navbar>
    )
}
