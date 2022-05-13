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
        <Card style={{ width: '300px' }} className='m-3 p-2' bg='dark' text='light'>
            <Card.Img variant='top' src={character.image.url} style={{ height: '250px' }} />
            <Card.Body>
                <Card.Title className='text-center' style={{ marginBottom: '20px' }}>{character.name}</Card.Title>
                <Card.Text><strong>Intelligence: </strong>{character.powerstats.intelligence}</Card.Text>
                <Card.Text><strong>Strength: </strong>{character.powerstats.strength}</Card.Text>
                <Card.Text><strong>Speed: </strong>{character.powerstats.speed}</Card.Text>
                <Card.Text><strong>Durability: </strong>{character.powerstats.durability}</Card.Text>
                <Card.Text><strong>Power: </strong>{character.powerstats.power}</Card.Text>
                <Card.Text><strong>Combat: </strong>{character.powerstats.combat}</Card.Text>
                <div className='d-flex flex-row justify-content-end' style={{marginTop: '20px'}}>
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
                </div>
            </Card.Body>
        </Card>
    )
}
