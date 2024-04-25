import React, { useState } from 'react';
import '../CharacterList.css';

function CharacterList({ characters, onCharacterSelect }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Character List</h2>
      <input
        type="text"
        placeholder="Search characters..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <ol>
        {filteredCharacters.map((character, index) => (
          <li key={character.id} onClick={() => onCharacterSelect(character)}>
            <span className="character-name">{character.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CharacterList;