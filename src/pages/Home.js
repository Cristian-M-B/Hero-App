import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { Card, Spinner } from 'react-bootstrap';
import axios from 'axios';

export default function Home({ token }) {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadTeam() {
        setLoading(true);
        try {
            let response1 = await axios.get('https://superheroapi.com/api/4842455305833642/69');
            let response2 = await axios.get('https://superheroapi.com/api/4842455305833642/659');
            let response3 = await axios.get('https://superheroapi.com/api/4842455305833642/332');
            let response4 = await axios.get('https://superheroapi.com/api/4842455305833642/237');
            let response5 = await axios.get('https://superheroapi.com/api/4842455305833642/370');
            let response6 = await axios.get('https://superheroapi.com/api/4842455305833642/405');
            setTeam([response1.data, response2.data, response3.data, response4.data, response5.data, response6.data]);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadTeam();
    }, [])

    return (
        <>
            <NavBar />
            <div
                className='d-flex 
                flex-row
                justify-content-center 
                align-items-center
                flex-wrap
                min-vh-100'
            >
                {team?.map(player => {
                    return (
                        <Card key={player.id} style={{ width: '300px' }} className='m-3' bg='dark' text='light'>
                            <Card.Img variant='top' src={player.image.url} style={{ height: '250px' }} />
                            <Card.Body>
                                <Card.Title className='text-center'>{player.name}</Card.Title>
                                <Card.Text>{player.biography.alignment}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
                {loading &&
                    <Spinner
                        animation='border'
                        variant='light'
                        style={{ width: '3rem', height: '3rem' }}
                    />
                }
            </div>
            <Footer />
        </>
    )
}
