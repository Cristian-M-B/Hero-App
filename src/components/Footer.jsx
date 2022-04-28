import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark" className='w-100'>
            <Container className='d-flex justify-content-center'>
                <Navbar.Text>Cristian Baronetto</Navbar.Text>
            </Container>
        </Navbar>
    )
}
