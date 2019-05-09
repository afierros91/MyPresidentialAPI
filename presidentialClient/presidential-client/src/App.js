import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/home';
import Search from './components/search';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    presidents: [],
    searchResult: {}
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
    axios.get(`http://localhost:5000/presidents/name/${number}`)
      .then(res =>{
        console.log(res);
        this.setState({
          searchResult: res.data
        })
      })
  }

  addPresident = (president) => {
    console.log('trying to post')
    axios.post('http://localhost:5000/presidents', president)
      .then(res => {
        console.log(res);
      })
  }

  update = (president, number) => {
    axios.put(`http://localhost:5000/presidents/${number}`, president)
      .then(res =>{
        console.log(res);
      })
  }

  delete = (presidents) => {
    axios.delete(`http://localhost:5000/presidents/${presidents}`)
      .then(res =>{
        console.log(res);
      })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => <Home presidents={this.state.presidents}/>}></Route>
            <Route exact path='/edit' render={() => <Edit presidents={this.state.presidents} addPresident={this.addPresident} update={this.update} delete={this.delete}/>}></Route>
            <Route exact path='/search' render={() => <Search getByName={this.getByName} getByNumber={this.getByNumber} searchResult={this.state.searchResult}/>}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
