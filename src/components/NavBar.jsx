import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton.jsx';
import { useStore } from '../context/StoreProvider.js';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    const { token } = useStore();

    return (
        <Navbar bg="dark" variant="dark" className='w-100'>
            <Container>
                <Navbar.Brand>Hero App</Navbar.Brand>
                {/* <Nav className="me-auto"> */}
                {token &&
                    <Link to='/' className='text-decoration-none text-light'>
                        Home
                    </Link>
                }
                {token &&
                    <Link to='/search' className='text-decoration-none text-light'>
                        Search
                    </Link>
                }
                {token &&
                    <LogoutButton />
                }
                {/* </Nav> */}
            </Container>
        </Navbar>
    )
}
