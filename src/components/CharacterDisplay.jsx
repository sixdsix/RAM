import React from 'react';

function CharacterDisplay({ character }) {
  return (
    <div className="CharacterDisplay">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
}

export default CharacterDisplay;
