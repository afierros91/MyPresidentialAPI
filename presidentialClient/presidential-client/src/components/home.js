import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div className="row center yellow">
                    <div className="jumbotron">
                        <h1>Presidential API</h1>
                        <p className="lead">Data on the Presidents of the USA</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3"></div>
                </div>
                <div className="col-lg-6 center">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p><b>lorem ipsum dolor sit amet</b></p>
                    <p>lorem ipsum <b>:)</b>dolor sit amet</p>
                </div>
                <div className="row">
                    <hr />
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <h1 className="center">Try it now!</h1>
                        <div className="input-group">
                            <span className="input-group-addon">localhost500</span>
                            <input type="text" className="form-control" placeholder="presidents/1/" />
                            <span className="input-group-btn">
                                <button onClick="" className="btn btn-primary">request</button>
                            </span>
                            <small>Hint, try: <a href="#">president/number</a><a href="#">president/name</a><a href="#">president/party</a></small>
                            <p className="lead pad_top">Result:</p>
                            <div className="well">
                                <pre className="pre-scrollable">
                                    pres data here
                                </pre>
                            </div>
                        </div>
                        <div className="col-sm-2 col-lg-1 col-md-2"></div>
                    </div>
                </div>
                <div className="row pad_bot">
                    <div className="col-sm-1 col-lg-1 col-md-1"></div>
                    <div className="col-sm-3 col-lg-3 col-md-3">
                        <h4 className="center">what is this</h4>
                        <p>hello world</p>
                        <p>goodbye world</p>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-md-3">
                        <h4 className="center">what is this</h4>
                        <p>hello world</p>
                        <p>goodbye world</p>
                    </div>
                    <div className="col-sm-3 col-lg-3 col-md-3">
                        <h4 className="center">what is this</h4>
                        <p>hello world</p>
                        <p>goodbye world</p>
                    </div>
                    <div className="col-sm-1 col-lg-1 col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default Home;