import React, { Component } from 'react';
import './App.css';
import {CardList} from './Components/Card-list/card-list.component';
import {SearchField} from './Components/SearchField/search-field.component'

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      monster: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json(), reject => "").then(users => this.setState({monster: users}) )
   
  }

  onChangeServiceField = (e)=> {
      this.setState({searchField: e.target.value});
  };

  render() {
    const {monster, searchField} = this.state;

    let filteredMonster =monster.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
         <h1>Monster Robolex</h1>
         <SearchField placeholder = 'Search Monster' handleonchange= {this.onChangeServiceField} /> 
         <CardList monster={filteredMonster} />
      </div>
    );
  }
}


