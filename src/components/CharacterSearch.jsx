import React, { useState } from 'react';
import '../CharacterSearch.css';

function CharacterSearch({ fetchCharacter }) {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const characterId = parseInt(inputValue);
    if (isNaN(characterId) || characterId < 1 || characterId > 826) {
      setErrorMessage('Please enter a valid character ID between 1 and 826.');
    } else {
      fetchCharacter(characterId);
      setInputValue('');
      setErrorMessage('');
    }
  };

  const handleRandomClick = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    fetchCharacter(randomId);
    setInputValue('');
    setErrorMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter character ID"
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="random-button-container"> {}
        <button className="random-button" onClick={handleRandomClick}>Random</button>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default CharacterSearch;
