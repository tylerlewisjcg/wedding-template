import React, { Component } from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Bride from "./components/Bride";
import Groom from "./components/Groom";
import Guestbook from "./components/Guestbook";
import Itinerary from "./components/Itinerary";
import OurStory from "./components/OurStory";
import PhotoAlbum from "./components/PhotoAlbum";
import RegistryLinks from "./components/RegistryLinks";
import RSVP from "./components/RSVP";
import WeddingParty from "./components/WeddingParty";

class App extends Component {
  render() {
    return (
      <Route
        path="/"
        render={() => (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bride" component={Bride} />
            <Route path="/groom" component={Groom} />
            <Route path="/guestbook" component={Guestbook} />
            <Route path="/itinerary" component={Itinerary} />
            <Route path="/ourstory" component={OurStory} />
            <Route path="/photoalbum" component={PhotoAlbum} />
            <Route path="/registrylinks" component={RegistryLinks} />
            <Route path="/rsvp" component={RSVP} />
            <Route path="/weddingparty" component={WeddingParty} />
          </Switch>
        )}
      />
    );
  }
}

export default App;
