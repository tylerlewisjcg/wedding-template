import React, { Component } from 'react';
import './../styles/home.css';
import Navbar from './Navbar'
import Countdown from './Countdown';
import Footer from './Footer';
import HomePic from './../assets/pictures/DSC_0314.jpg';
import Bride from './../components/Bride';
import Groom from './../components/Groom';
import Itinerary from './../components/Itinerary';
import OurStory from './../components/OurStory';
import PhotoAlbum from './../components/PhotoAlbum';
import RegistryLinks from './../components/RegistryLinks';
import RSVP from './RSVP';
import WeddingParty from './WeddingParty';
import Guestbook from './Guestbook';
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Navbar/>
            <Countdown/>
            <div className="main-picture" >
            <img src={HomePic} width="900px" height="600px" alt=""/>
            </div>
<OurStory/>
<Bride/>
<Groom/>
<Itinerary/>
<PhotoAlbum/>
<RegistryLinks/>
<WeddingParty/>
<RSVP/>
<Guestbook/>
            <Footer/>
            </div> );
    }
}
 
export default Home;