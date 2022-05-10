import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from '../context/StoreProvider.js';
import { actionsTypes } from '../context/StoreReducer.js';
import axios from 'axios';
import NavBar from '../components/NavBar.jsx';
import CharacterDetail from '../components/CharacterDetail.jsx';
import Footer from '../components/Footer.jsx';

export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    async function getCharacter() {
        let character = await axios.get(`https://superheroapi.com/api/4842455305833642/${id}`)
        dispatch({ type: actionsTypes.GET_DETAIL, payload: character.data })
    }

    useEffect(() => {
        getCharacter();
        return () => {
            dispatch({ type: actionsTypes.REMOVE_DETAIL })
        }
    }, [])

    return (
        <>
            <NavBar />
            <CharacterDetail />
            <Footer />
        </>
    )
}
