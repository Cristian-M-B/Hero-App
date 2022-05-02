import React from 'react';
import { Card } from 'react-bootstrap';
import NavBar from '../components/NavBar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import Footer from '../components/Footer.jsx';
import { useStore } from '../context/StoreProvider.js';

export default function Search() {
    const { search } = useStore();

    return (
        <>
            <NavBar />
            <SearchBar />
            <div
                className='d-flex 
                flex-row
                justify-content-center 
                align-items-center
                flex-wrap
                min-vh-100'
            >
            {search?.map(s => {
                return <Card key={s.id} style={{ width: '300px' }} className='m-3' bg='dark' text='light'>
                <Card.Img variant='top' src={s.image.url} style={{ height: '250px' }} />
                <Card.Body>
                    <Card.Title className='text-center'>{s.name}</Card.Title>
                    <Card.Text>{s.biography.alignment}</Card.Text>
                </Card.Body>
            </Card>
            })}
            </div>
            <Footer />
        </>
    )
}
