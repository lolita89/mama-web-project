import React, { Component } from 'react';
import Banner from './Banner'
import Profile from './Profile'
import Contact from './Contact'

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