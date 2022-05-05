import React from 'react';
import CharacterCard from './CharacterCard.jsx';

export default function CharactersCards({ characters, addButton, deleteButton, characterDetail }) {
    return (
        <div
            className='d-flex 
                flex-row
                justify-content-center 
                align-items-center
                flex-wrap
                min-vh-100'
        >
            {characters?.map(character => {
                return (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        addButton={addButton}
                        deleteButton={deleteButton}
                        characterDetail={characterDetail}
                    // key={character.id}
                    // id={character.id}
                    // name={character.name}
                    // image={character.image.url}
                    // alignment={character.biography.alignment}
                    />
                )
            })}
        </div>
    )
}
