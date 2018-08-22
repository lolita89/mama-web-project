import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'
import './Banner.css'

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            caleg: 'Fariani Sugiharto B.Sc., MBA',
            dapil: 'Caleg DPR RI Kabupaten Kebumen, Banjarnegara, dan Purbalingga'
        }
    };
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1> {this.state.caleg} </h1>
                    <h3> {this.state.dapil} </h3>
                </Jumbotron> 
            </div>
        );
    }
}

export default Banner;