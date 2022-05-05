import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from '../context/StoreProvider.js';
import { actionsTypes } from '../context/StoreReducer.js';

export default function AddButton({ disabled, character }) {
    const dispatch = useDispatch();

    function addTeam(character) {
        dispatch({ type: actionsTypes.ADD_TEAM, payload: character })
    }

    return (
        <Button
            disabled={disabled}
            onClick={(e) => addTeam(character)}
        >
            +
        </Button>
    )
}
