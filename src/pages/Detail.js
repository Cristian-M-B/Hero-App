import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import CharacterDetail from '../components/CharacterDetail.jsx';
import Footer from '../components/Footer.jsx';

export default function Detail() {
    const { id } = useParams();
    
    return (
        <>
            <NavBar />
            <CharacterDetail />
            <Footer />
        </>
    )
}
