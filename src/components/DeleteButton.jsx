import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from '../context/StoreProvider.js';
import { actionsTypes } from '../context/StoreReducer.js';

export default function DeleteButton({id}) {
    const dispatch = useDispatch();

    function removeTeam(id) {
        dispatch({ type: actionsTypes.REMOVE_TEAM, payload: id });
    }

    return (
        <Button
            onClick={(e) => removeTeam(id)}
            className='bg-danger'
        >
            X
        </Button>
    )
}
