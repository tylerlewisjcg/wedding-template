import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import App from './App'
import Bride from './components/Bride';
import Directions from './components/Directions';
import Groom from './components/Groom';
import Guestbook from './components/Guestbook';
import Itinerary from './components/Itinerary';
import OurStory from './components/OurStory';
import PhotoAlbum from './components/PhotoAlbum';
import RegistryLinks from './components/RegistryLinks';
import RSVP from './components/RSVP';
import WeddingParty from './components/WeddingParty';




export default (
  <Switch>
    <Route exact path="/" component={ App } />
    <Route path="/bride" component={ Bride } />
    <Route path="/directions" component={ Directions } />
    <Route path="/groom" component={ Groom } />
    <Route path="/guestbook" component={ Guestbook } />
    <Route path="/itinerary" component={ Itinerary } />
    <Route path="/ourstory" component={ OurStory } />
    <Route path="/photoalbum" component={ PhotoAlbum } />
    <Route path="/registrylinks" component={ RegistryLinks } />
    <Route path="/rsvp" component={ RSVP } />
    <Route path="/weddingparty" component={ WeddingParty } />


  </Switch>
)