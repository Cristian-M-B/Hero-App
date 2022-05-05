import React from 'react';
import { useStore } from '../context/StoreProvider.js';
import NavBar from '../components/NavBar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import CharactersCards from '../components/CharactersCards.jsx';
import Footer from '../components/Footer.jsx';

export default function Search() {
    const { search } = useStore();

    return (
        <>
            <NavBar />
            <SearchBar />
            <CharactersCards 
                characters={search} 
                addButton={true} 
            />
            <Footer />
        </>
    )
}
