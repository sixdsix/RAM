import React, { useState, useEffect } from 'react';
import CharacterSearch from './components/CharacterSearch';
import CharacterDisplay from './components/CharacterDisplay';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  const [character, setCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      setIsLoading(true);
      let allCharacters = [];
      let nextPage = 'https://rickandmortyapi.com/api/character';
      while (nextPage) {
        const response = await fetch(nextPage);
        const data = await response.json();
        allCharacters = allCharacters.concat(data.results);
        nextPage = data.info.next; 
      }
      setCharacters(allCharacters);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setIsLoading(false);
    }
  };


  const fetchCharacter = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      setCharacter(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching character:', error);
      setIsLoading(false);
    }
  };

  const handleCharacterSelect = (selectedCharacter) => {
    fetchCharacter(selectedCharacter.id);
  };

  return (
    <div className="app-container">
      <h1>Rick and Morty Character Viewer</h1>
      <div className="search-container">
        <CharacterSearch fetchCharacter={fetchCharacter} />
        {isLoading && <p>Loading...</p>}
        {character && <CharacterDisplay character={character} />}
      </div>
      <div className="character-list-container">
        <CharacterList characters={characters} onCharacterSelect={handleCharacterSelect} />
      </div>
    </div>
  );
}

export default App;