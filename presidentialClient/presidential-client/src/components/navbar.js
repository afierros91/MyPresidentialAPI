import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <div className="container row">
                <div className="col-md-4">
                    <Link to="/">
                        <h3>Home</h3>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/about">
                        <h3>About</h3>
                    </Link>
                </div>
                <div className="col-md-4">
                
                </div>
            </div>
        )
    }
}

export default Navbar;