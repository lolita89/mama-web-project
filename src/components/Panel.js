import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
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
            <div>
                <div className="panel">
                    
                    <h2><a href="#who"> {this.state.who} </a></h2>
                    <h2><a href="#vision"> {this.state.vision} </a></h2>
                    <h2><a href="#program"> {this.state.program} </a></h2>
                    <h2><a href="#why"> {this.state.why} </a></h2>

                </div>

                <div>
                    <Image className="foto" src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/38923568_10217936571234808_2358916718954283008_n.jpg?_nc_cat=111&oh=d450d9f4638ff386c42fae77cd48b1f3&oe=5C4C3770" circle />
                </div>

            </div>
            
        );
    }
}

export default Panel;