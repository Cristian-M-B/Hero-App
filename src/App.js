import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useStore } from './context/StoreProvider.js';
import { actionsTypes } from './context/StoreReducer.js';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './pages/Home.js';
import Search from './pages/Search.js';
import Login from './pages/Login.js';
import Error from './pages/Error.js';

export default function App() {
  const dispatch = useDispatch();
  const { token } = useStore();

  useEffect(() => {
    dispatch({ type: actionsTypes.GET_TOKEN });
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute token={token}>
          <Home token={token} />
        </ProtectedRoute>
      }/>
      <Route path='/search' element={<Search />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}
