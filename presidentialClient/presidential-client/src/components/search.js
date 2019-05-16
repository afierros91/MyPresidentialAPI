import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';

class Search extends Component {
  state = {
    search: "",
    results: [],
  }
  
  convert() {
    let mySearch = this.state.search; {
      if (this.state.search != "") {
        return mySearch.toLowerCase();
      }
    }
  }

  getByParty = () => {
    let lowerCased = this.convert();
    axios.get(`http://localhost:5000/presidents/party/${lowerCased}`)
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data
        })
      })
  }

  getByTerms = (terms) => {
    axios.get(`http://localhost:5000/presidents/terms/${terms}`)
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data
        })
      })
  }

  getByState = () => {
    let lowerCased = this.convert();
    axios.get(`http://localhost:5000/presidents/state/${lowerCased}`)
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data
        })
      })
  }

  filterPres() {
    if (this.state.results != []) {
      return (
        <div id="results-container" className="table-responsive">
        <table id="filter-body"className="table">
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
          {this.state.results.map((president, i) => {
            return (
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
            )
          })}
        </table>
        </div>
      )
    }
  }

  render() {
    return (
      <div id="filter-container" className="flex-container row">
        <form action="">
          <div className="form-group">
            <h1>Filter Presidents</h1>
            <div className="row">
              <input className="form-control col-sm-6" type="search" placeholder="Filter by..." onChange={(e) => this.setState({ search: e.target.value })} />
              <DropdownButton id="dropdown-basic-button" title="Get By">
                <Dropdown.Item onClick={(e) => this.getByParty(this.state.search)}>Party</Dropdown.Item>
                <Dropdown.Item onClick={(e) => this.getByTerms(this.state.search)}>Term</Dropdown.Item>
                <Dropdown.Item onClick={(e) => this.getByState(this.state.search)}>State</Dropdown.Item>
              </DropdownButton>
            </div>
            <small className="form-text text muted">Search by various presidential data</small>
          </div>
        </form>

        <div id="filter-results">
          {this.filterPres()}
        </div>
      </div>
    )
  }
}

export default Search;