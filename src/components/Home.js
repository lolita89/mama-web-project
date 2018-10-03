import React, { Component } from 'react';
import Banner from './Banner';
import Profile from './Profile';
import Contact from './Contact';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Profile/>
                <Contact/>
            </div>
        );
    }
}

export default Home;