import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Search from './components/search';



class App extends Component {
  state = {
    presidents: [],
  }

  componentWillMount() {
    this.getPresidents();
  }

  getPresidents= () => {
    console.log('hello')
    axios.get('http://localhost:5000/presidents')
      .then(res => {
        this.setState({
          presidents: res.data
        })
      })
  }

  getByName= (name) => {
    axios.get(`http://localhost:5000/presidents/name/${name}`)
      .then(res =>{
        console.log(res);
        this.setState({
          searchResult: res.data
        })
      })
  }

  getByNumber= (number) => {
    axios.get(`http://localhost:5000/presidents/number/${number}`)
      .then(res =>{
        console.log(res);
        this.setState({
          searchResult: res.data
        })
      })
  }

  getByParty= (party) => {
    axios.get(`http://localhost:5000/presidents/party/${party}`)
      .then(res =>{
        console.log(res);
        this.setState({
          searchResult: res.data
        })
      })
  }

  getByTerms= (term) => {
    axios.get(`http://localhost:5000/presidents/term/${term}`)
      .then(res =>{
        console.log(res);
        this.setState({
          searchResult: res.data
        })
      })
  }

  getByState= (state) => {
    axios.get(`http://localhost:5000/presidents/state/${state}`)
      .then(res =>{
        console.log(res);
        this.setState({
          searchResult: res.data
        })
      })
  }

  getByDeath= (death) => {
    axios.get(`http://localhost:5000/presidents/death/${death}`)
      .then(res =>{
        console.log(res);
        this.setState({
          searchResult: res.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => <Home/>}></Route>
            <Route exact path='/about' render={() => <About/>}></Route>
            <Route exact path='/search' render={() => <Search 
            presidents={this.state.presidents}
            searchResult={this.state.searchResult}
            // getByName={this.getByName}
            // getByNumber={this.getByNumber}
            // getByParty={this.getByParty}
            // getByTerms={this.getByTerms}
            // getByState={this.getByState}
            // getByDeath={this.getByDeath}
            />}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
