import React, { Component } from 'react'; //import react
import './App.css';
import { CardList } from './components/card-list/cardlist.component';
import { SearchBox } from './components/search/search-box.component';
// import { Card } from './components/card/card.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFields: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  render() {
    //object destructuring
    const { monsters, searchFields } = this.state;
    const filteredMonster = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchFields.toLowerCase())
      );
    return (
      <div className='App'>
      <SearchBox 
         placeholder='search monsters' 
         handleChange= { e => this.setState ({searchFields : e.target.value})}/>
        <CardList monsters = {filteredMonster}/>
      </div>
    );
  }
}

export default App;
