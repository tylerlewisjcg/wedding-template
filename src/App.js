import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Countdown from './components/Countdown';
import Bride from './components/Bride';
import Groom from './components/Groom';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Countdown/>
     Jennifer and Jordan's Wedding Website
     <p>Features:</p>
     <ul>
       <li>
       photo album</li>
<li>wedding day schedule</li>
<li>registry links</li>

<li>our story</li>
<li>directions/addresses/google maps</li>
<li>about the wedding party</li>
<li>online guest book</li>
<li>RSVP</li>
<li>post pictures of the wedding</li>
<li>email reminders/text reminders for guests</li>
<li>text notifications to bride and groom when someone RSVPs</li>

     </ul>
     <OurStory/>
<Bride/>
<Groom/>
     <Footer/>
      </div>
    );
  }
}

export default App;
