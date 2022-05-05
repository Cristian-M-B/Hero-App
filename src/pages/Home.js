import React from 'react';
import { useStore } from '../context/StoreProvider.js';
import NavBar from '../components/NavBar.jsx';
import CharactersCards from '../components/CharactersCards.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
    const { team } = useStore();

    return (
        <>
            <NavBar />
            <CharactersCards 
                characters={team} 
                deleteButton={true} 
                characterDetail={true}
            />
            <Footer />
        </>
    )
}
