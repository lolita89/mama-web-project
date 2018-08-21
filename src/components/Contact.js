import React, { Component } from 'react';
import './Contact.css'
import { Container, Row, Col } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <div className="footer">
    
                <a href="https://www.facebook.com/farianisugiharto?fb_dtsg_ag=Adw5jsv1TuKIgT3YacrKGc7uzdYnRaNWkf6H8_Do4Z4w0w%3AAdz7QFNUvd1nxtxuMz7lnEKTOGtL5wgO1I14zozpjNF0pA"><img className="svg" src="./contacts/facebook.svg" hspace="20"></img></a>

 
                <a href="https://www.instagram.com/farianisugiharto/"><img className="svg" src="./contacts/instagram.svg"></img></a>
            

            </div>
        );
    }
}

export default Contact;