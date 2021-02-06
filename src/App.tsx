import React, { Component } from 'react';
import CharacterList, { Character } from './CharacterList';

import './App.css';

class App extends Component {
  render() {
    const characters: Character[] = [
      {
        id: 1,
        name: '羽咲 綾乃',
        age: 16,
        height: 151,
      },
      {
        id: 2,
        name: '荒垣 なぎさ',
        age: 18,
        height: 174,
      },
      {
        id: 3,
        name: '泉 理子',
        age: 18,
      },
    ];

    return (
      <div className="container">
        <header>
          <h1>キャラクター</h1>
        </header>
        <CharacterList school="A学園" characters={characters} />
      </div>
    );
  }
}

export default App;
