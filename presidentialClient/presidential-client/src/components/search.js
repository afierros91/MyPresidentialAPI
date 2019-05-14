import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

class Search extends Component {
    state = {
        search: "",
        results: [],
    }

    
    render() {
        return(
            <div className="container">
                <form type="search" action="">
                    <input type="text" 
                    onChange={(e) => this.setState({
                        search: e.target.value
                    })}
                    />
                </form>
                <DropdownButton id="dropdown-basic-button" title="Get By">
                    <Dropdown.Item href={this.props.getByName(this.state.search)}>Name</Dropdown.Item>
                    <Dropdown.Item href={this.props.getByNumber(this.state.search)}>Number</Dropdown.Item>
                    <Dropdown.Item href={this.props.getByParty(this.state.search)}>Party</Dropdown.Item>
                    <Dropdown.Item href={this.props.getByTerms(this.state.search)}>Term</Dropdown.Item>
                    <Dropdown.Item href={this.props.getByState(this.state.search)}>State</Dropdown.Item>
                    <Dropdown.Item href={this.props.getByDeath(this.state.search)}>Death</Dropdown.Item>
                </DropdownButton>
                <div>
                    {
                        this.props.searchResult.map((president, i) => {
                        return (
                        <li key={i}>{president.name}</li>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Search;