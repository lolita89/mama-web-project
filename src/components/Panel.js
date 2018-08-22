import React, { Component } from 'react';
import './Panel.css'

class Panel extends Component {
    constructor(props){
        super(props);
        this.state = {
            who:'Siapa Fariani?',
            vision: 'Visi dan Misi',
            program: 'Program',
            why: 'Mengapa Fariani?' 
        }
    };
    render() {
        return (
            <div className="panel">
                
                <h2><a href="#who"> {this.state.who} </a></h2>
                <h2><a href="#vision"> {this.state.vision} </a></h2>
                <h2><a href="#program"> {this.state.program} </a></h2>
                <h2><a href="#why"> {this.state.why} </a></h2>

            </div>
        );
    }
}

export default Panel;