import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Navbar from './Navbar';
// import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchfield: ''
    }
  }

  componentDidMount() {

    const getAllPeople = async (targetUrl) => {
      try {
        let people = [];
        let next = targetUrl;
        while (next != null) {
          const data = await fetch(next);
          const results = await data.json();
          people = people.concat(results['results']);
          next = results['next'];
          }
        return people
      } catch {
        return Promise.resolve('error')
      }
    }

    getAllPeople('https://swapi.co/api/people/')
      .then(results => this.setState({ people: results }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    if (this.state.people === 'error') {
      return <h1 className="tc f1 gold">Unable to load characters. Please try again later.</h1>
    } else {
      const filteredPeople = this.state.people.filter(character => {
        return character.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });
      if (this.state.people.length === 0) {
        return <h1 className="tc f1 gold">loading...</h1>
      } else {
        return (
          <div className="tc">
            <Navbar>
              <header className='w-100'>
                <h1 className="f1 gold ma2">Star Wars Characters</h1>
              </header>
              <SearchBox searchChange={this.onSearchChange} />
            </Navbar>
            <CharacterList id='cardlist' people={filteredPeople}/>
          </div>
        );
      }
    } 
  }
}

export default App;
