import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            facebook: 'https://www.facebook.com/farianisugiharto?fb_dtsg_ag=Adw5jsv1TuKIgT3YacrKGc7uzdYnRaNWkf6H8_Do4Z4w0w%3AAdz7QFNUvd1nxtxuMz7lnEKTOGtL5wgO1I14zozpjNF0pA',
            instagram: 'https://www.instagram.com/farianisugiharto/'
        }
    }
    render() {
        return (
            <div className="footer">
    
                <a href={this.state.facebook}><img alt="facebook" className="svg" src="./contacts/facebook.svg" hspace="20"></img></a>
                <a href={this.state.instagram}><img alt="instagram" className="svg" src="./contacts/instagram.svg"></img></a>

            </div>
        );
    }
}

export default Contact;