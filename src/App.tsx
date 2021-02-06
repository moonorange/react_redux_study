import React, { Component } from 'react';
import CharacterList from './CharacterList';
import characters from './constants';

import './App.css';

class App extends Component {
  render() {
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
