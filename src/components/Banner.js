import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'
import './Banner.css'

class Banner extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1> Fariani Sugiharto B.Sc., MBA </h1>
                    <h3> Caleg DPR RI Kabupaten Kebumen, Banjarnegara, dan Purbalingga </h3>
                </Jumbotron> 
            </div>
        );
    }
}

export default Banner;