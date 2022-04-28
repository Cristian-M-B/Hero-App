import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ token, children }) {
    const navigate = useNavigate();
    if (!token) {
        navigate('/login')
    }
    return children;
}
