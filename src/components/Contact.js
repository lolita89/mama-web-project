import React, { Component } from 'react';
import '../components/css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faSmileWink } from '@fortawesome/free-solid-svg-icons'


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

                <div className="socmed">
                    <a title="instagram" href={this.state.instagram}><FontAwesomeIcon className="font-awesome" icon={faInstagram}/></a>
                    <a title="facebook" href={this.state.facebook}><FontAwesomeIcon className="font-awesome" icon={faFacebook}/></a>
                </div>

                <span> &copy; Copyright 2018 by Cika </span>



            </div>
        );
    }
}

export default Contact;