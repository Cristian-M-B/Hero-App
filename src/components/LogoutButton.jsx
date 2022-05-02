import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from '../context/StoreProvider.js';
import { actionsTypes } from '../context/StoreReducer.js';

export default function LogoutButton() {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch({type: actionsTypes.LOGOUT});
    }

    return (
        <Button 
            variant='dark'
            onClick={handleClick}
        >
            Logout
        </Button>
    )
}
