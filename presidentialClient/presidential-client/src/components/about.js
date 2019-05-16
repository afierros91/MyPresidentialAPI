import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <div className="flex-container">
                <div id="about" className="row">
                    <div className="col-md-6">
                        <h2>Introducing the Presidential API</h2>
                        <p>This is a library of presidential data.</p>
                        <p>Presidents can currently be filtered by party, state of birth, and number of terms.</p>
                        <p>Data can also be called on individual Presidents by name and number in the presidency.</p>

                        <h2>What is this for?</h2>
                        <p>Use Presidential API to make API calls of your own.</p>
                        <p><em>lorem ipsum dolor sit amet</em></p>
                        <pre>
                            <code>
                                code goes here
                            </code>
                        </pre>

                        <h2>What was this built with?</h2>
                        <p>Presidential API was created using Node.JS, MongoDB, Bootstrap, and React.</p>

                        <h2>Contributors</h2>
                            <ul>
                                <li><a href="https://github.com/theoriginalcaliforniaburrito" target="blank">Sebastian Chu</a></li>
                                <li><a href="https://github.com/afierros91" target="blank">Anthony Fierros</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;