import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';

class Search extends Component {
    state = {
        search: "",
        results: [],
    }

    getByName= (name) => {
        axios.get(`http://localhost:5000/presidents/name/${name}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: res.data
            })
          })
      }
    
      getByNumber= (number) => {
        axios.get(`http://localhost:5000/presidents/number/${number}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: res.data
            })
          })
      }
    
      getByParty= (party) => {
        axios.get(`http://localhost:5000/presidents/party/${party}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: res.data
            })
          })
      }
    
      getByTerms= (terms) => {
        axios.get(`http://localhost:5000/presidents/terms/${terms}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: res.data
            })
          })
      }
    
      getByState= (state) => {
        axios.get(`http://localhost:5000/presidents/state/${state}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: res.data
            })
          })
      }
    
      getByDeath= (death) => {
        axios.get(`http://localhost:5000/presidents/death/${death}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: res.data
            })
          })
      }

      myPresidents = this.state.results.map((president, i) => {
          return (
              <li key={i}>{president.name}</li>
          )
      })

      filterPres() {
          if(this.state.results != []) {
              return(
                //   <div className="row">
                //     <ul>{this.myPresidents}</ul>
                //   </div>
                this.state.results.map((president, i) => {
                    return (
                        <li key={i}>{president.name}</li>
                    )
                })
              )
          }
      }

    render() {
        return(
            <div className="container">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Filter Presidents</label>
                        <input type="search" onChange={(e) => this.setState({search: e.target.value})}/>
                        <small className="form-text text muted">search with formats</small>
                    </div>
                </form>

                <DropdownButton id="dropdown-basic-button" title="Get By">
                    {/* <Dropdown.Item href={this.getByName(this.state.search)}>Name</Dropdown.Item> */}
                    <Dropdown.Item onClick={(e) => this.getByNumber(this.state.search)}>Number</Dropdown.Item>
                    {/* <Dropdown.Item href={this.getByParty(this.state.search)}>Party</Dropdown.Item>
                    <Dropdown.Item href={this.getByTerms(this.state.search)}>Term</Dropdown.Item>
                    <Dropdown.Item href={this.getByState(this.state.search)}>State</Dropdown.Item>
                    <Dropdown.Item href={this.getByDeath(this.state.search)}>Death</Dropdown.Item> */}
                </DropdownButton>
                <div>
                    {/* {
                        this.state.results.map((president, i) => {
                        return (
                        <li key={i}>{president.name}</li>
                        )
                    })
                    } */}
                    {this.myPresidents}
                    {this.filterPres()}
                    <p>Hello {this.state.results.name}</p>
                </div>
            </div>
        )
    }
}

export default Search;