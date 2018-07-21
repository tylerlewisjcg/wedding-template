import React, { Component } from 'react';
import Navbar from './Navbar'
import Countdown from './Countdown';
import Footer from './Footer';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar/>
            <Countdown/>
            <Footer/>
            </div> );
    }
}
 
export default Home;