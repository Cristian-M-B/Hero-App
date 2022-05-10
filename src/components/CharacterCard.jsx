import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import AddButton from './AddButton.jsx';
import DeleteButton from './DeleteButton.jsx';
import IsRepeated from '../utils/IsRepeated.js';
import Limit from '../utils/Limit.js';
import Alignment from '../utils/Alignment.js';

export default function CharacterCard({ character, addButton, deleteButton, characterDetail }) {
    return (
        <Card style={{ width: '300px' }} className='m-3' bg='dark' text='light'>
            <Card.Img variant='top' src={character.image.url} style={{ height: '250px' }} />
            <Card.Body>
                <Card.Title className='text-center'>{character.name}</Card.Title>
                <Card.Text>{character.biography.alignment}</Card.Text>
                {addButton && 
                    <AddButton 
                        disabled={IsRepeated(character.id) || Limit() || Alignment(character.biography.alignment)}
                        character={character}
                    />
                }
                {characterDetail &&
                    <Link to={`/detail/${character.id}`}>
                        <Button>
                            Detail
                        </Button>
                    </Link>
                }
                {deleteButton && 
                    <DeleteButton 
                        id={character.id} 
                    />
                }
            </Card.Body>
        </Card>
    )
}
