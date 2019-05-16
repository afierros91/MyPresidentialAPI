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
              results: [res.data]
            })
          })
      }
    
      getByNumber= (number) => {
        axios.get(`http://localhost:5000/presidents/number/${number}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: [res.data]
            })
          })
      }
    
      getByParty= (party) => {
        axios.get(`http://localhost:5000/presidents/party/${party}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: [res.data]
            })
          })
      }
    
      getByTerms= (terms) => {
        axios.get(`http://localhost:5000/presidents/terms/${terms}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: [res.data]
            })
          })
      }
    
      getByState= (state) => {
        axios.get(`http://localhost:5000/presidents/state/${state}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: [res.data]
            })
          })
      }
    
      getByDeath= (death) => {
        axios.get(`http://localhost:5000/presidents/death/${death}`)
          .then(res =>{
            console.log(res);
            this.setState({
              results: [res.data]
            })
          })
      }

      filterPres() {
          if(this.state.results != []) {
              return(
                this.state.results.map((president, i) => {
                    return (
                        <table className="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name</th>                            
                              <th>Term Start</th>
                              <th>Term End</th>
                              <th>Party</th>
                              <th>Vice President</th>
                              <th>Terms</th>
                              <th>Born</th>
                              <th>Died</th>
                              <th>Prior Occupation</th>
                              <th>Home State</th>
                              <th>Birthplace</th>
                              <th>Spouse(s)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>{president.number}</th>
                              <td>{president.name}</td>
                              <td>{president.start}</td>
                              <td>{president.end}</td>
                              <td>{president.party}</td>
                              <td>{president.vice}</td>
                              <td>{president.terms}</td>
                              <td>{president.born}</td>
                              <td>{president.died}</td>
                              <td>{president.prior}</td>
                              <td>{president.state}</td>
                              <td>{president.home}</td>
                              <td>{president.spouse}</td>
                            </tr>
                          </tbody>
                        </table>
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
                    <Dropdown.Item onClick={(e) => this.getByName(this.state.search)}>Name</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => this.getByNumber(this.state.search)}>Number</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => this.getByParty(this.state.search)}>Party</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => this.getByTerms(this.state.search)}>Term</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => this.getByState(this.state.search)}>State</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => this.getByDeath(this.state.search)}>Death</Dropdown.Item>
                </DropdownButton>
                <div>
                    {this.filterPres()}
                </div>
            </div>
        )
    }
}

export default Search;