import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'
import './Banner.css'

class Banner extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1> Fariani Sugiharto </h1>
                    <h3> Caleg DPR RI </h3>
                </Jumbotron>
            </div>
        );
    }
}

export default Banner;