import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import '../components/css/panel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'



class Panel extends Component {
    constructor(props){
        super(props);
        this.state = {
            who:'Siapa Fariani?',
            vision: 'Visi dan Misi',
            program: 'Program',
            why: 'Mengapa Fariani?',
            picture: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/38923568_10217936571234808_2358916718954283008_n.jpg?_nc_cat=111&oh=d450d9f4638ff386c42fae77cd48b1f3&oe=5C4C3770"
        }
    };
    render() {
        
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        return (
            <div>
                <button onClick={topFunction} id="myBtn" title="Ke atas!">
                <FontAwesomeIcon className="font-awesome" icon={faArrowUp}/>
                </button>

                <div className="panel">
                    
                    <h2><a className="panel-name" href="#who"> {this.state.who} </a></h2>
                    <h2><a className="panel-name" href="#vision"> {this.state.vision} </a></h2>
                    <h2><a className="panel-name" href="#program"> {this.state.program} </a></h2>
                    <h2><a className="panel-name" href="#why"> {this.state.why} </a></h2>

                </div>

                <div classname="foto-container">
                    <Image className="foto" src={this.state.picture} circle />
                </div>

            </div>
            
        );
    }
}

export default Panel;