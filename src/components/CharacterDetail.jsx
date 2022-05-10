import React from 'react';
import { useStore } from '../context/StoreProvider.js';
import { Spinner } from 'react-bootstrap';
import '../styles/detail.css';

export default function CharacterDetail() {
    const { detail } = useStore();

    return (
        <div
            className='d-flex
                flex-row
                justify-content-center 
                align-items-center
                flex-wrap
                min-vh-100'
        >
            {detail.name ?
                <>
                    <div className='bg-light p-3'>
                        <img src={detail?.image?.url} alt={detail.name} width='300' />
                    </div>
                    <div className='detail'>
                        <h3 className='text-center' style={{ marginBottom: '50px' }}>
                            {detail?.name}
                        </h3>
                        <p>
                            <strong>Height: </strong> 
                            {detail?.appearance?.height[1]}
                        </p>
                        <p>
                            <strong>Weight: </strong>
                            {detail?.appearance?.weight[1]}
                        </p>
                        <p>
                            <strong>Eye color: </strong>
                            {detail?.appearance?.['eye-color']}
                        </p>
                        <p>
                            <strong>Hair color: </strong>
                            {detail?.appearance?.['hair-color']}
                        </p>
                        <p>
                            <strong>Aliases: </strong> 
                            {detail?.biography?.aliases?.map(alias => {
                                return <span key={alias}>{`${alias}. `}</span>
                            })}
                        </p>
                        <p>
                            <strong>Workplace: </strong>
                            {detail?.work?.base}
                        </p>
                    </div>
                </> :
                <Spinner animation='border' variant='light' style={{width:'3rem', height: '3rem'}} />
            }
        </div>
    )
}
