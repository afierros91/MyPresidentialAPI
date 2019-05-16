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
            />}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
