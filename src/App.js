import React, { Component } from 'react';
import CharacterList from './CharacterList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

componentDidMount() {
  fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(results => this.setState({ people: results['results']}))
}

  render() {
    const { people } = this.state;
    return (
      <div className="tc">
        <header>
          <h1 className="f1 gold">Star Wars Characters</h1>
        </header>
        <CharacterList people={people}/>
      </div>
    );
  }
}

export default App;
