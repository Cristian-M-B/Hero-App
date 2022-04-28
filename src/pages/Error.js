import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Error() {
    return (
        <div
            style={{ height: '100vh' }}
            className='d-flex 
                justify-content-center 
                align-items-center'
        >
            <div className='bg-light w-25 h-25'>
                Pagina no encontrada!
            </div>
        </div>
    )
}
