import React from "react";
import Navbar from "./Navbar";
import './../styles/weddingparty.css';
import WestonClements from "./../assets/pictures/Weston_Clements.png";
import MargaretMackin from "./../assets/pictures/Margaret_Mackin.png";
import LayklynnEshmeyer from "./../assets/pictures/Layklynn_Eshmeyer.png";
import LaurenAlvarez from "./../assets/pictures/Lauren_Alvarez_MOA.png";
import KarsonLloyd from "./../assets/pictures/Karson_Lloyd_BM.png";
import IanClements from "./../assets/pictures/Ian_Clements.jpg";
import KamiWalker from "./../assets/pictures/Kami_Walker.png";
import AbbyJohnston from "./../assets/pictures/Abby_Johnston.png";
import AveriHooper from "./../assets/pictures/Averi_Hooper.png";
import AverySmith from "./../assets/pictures/Avery_Smith.png";

const WeddingParty = () => {
  return (
    <div>
      <Navbar />
      <h1>Wedding Party</h1>
      <h2>The Girls</h2>
      <div className="which_side">
        <div className="wedding_party">
          <p>Lauren Alvarez</p>
          <img src={LaurenAlvarez} width="200px" />
        </div>

        <div className="wedding_party">
          <p>Abby Johnston</p>
          <img src={AbbyJohnston} width="200px" />
        </div>

        <div className="wedding_party">
          <p>Averi Hooper</p>
          <img src={AveriHooper} width="200px" />
        </div>

        <div className="wedding_party">
          <p>Avery Smith</p>
          <img src={AverySmith} width="200px" />
        </div>

        <div className="wedding_party">
          <p>Kami Walker</p>
          <img src={KamiWalker} width="200px" />
        </div>

        <div className="wedding_party">
          <p>Layklynn Eshmeyer</p>
          <img src={LayklynnEshmeyer} width="200px" />
        </div>

        <div className="wedding_party">
          <p>Margaret Mackin</p>
          <img src={MargaretMackin} width="200px" />
        </div>
      </div>

      <h2>The Guys</h2>
      <div className="which_side">

        <div className="wedding_party">
          <p>Karson Lloyd</p>
          <img src={KarsonLloyd} width="200px" />
        </div>

        <div className="wedding_party">
          <p>Weston Clements</p>
          <img src={WestonClements} width="200px" />
        </div>

        <div className="wedding_party">
          <p>Ian Clements</p>
          <img src={IanClements} width="200px" />
        </div>

      </div>
    </div>
  );
};

export default WeddingParty;
