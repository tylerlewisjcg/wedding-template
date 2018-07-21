import React from 'react';
import Navbar from './Navbar';
import WestonClements from './../assets/pictures/Weston_Clements.png';
import MargaretMackin from './../assets/pictures/Margaret_Mackin.png';
import LayklynnEshmeyer from './../assets/pictures/Layklynn_Eshmeyer.png';
import LaurenAlvarez from './../assets/pictures/Lauren_Alvarez_MOA.png';
import KarsonLloyd from './../assets/pictures/Karson_Lloyd_BM.png';
import IanClements from './../assets/pictures/Ian_Clements.jpg';
import KamiWalker from './../assets/pictures/Kami_Walker.png';
import AbbyJohnston from './../assets/pictures/Abby_Johnston.png';
import AveriHooper from './../assets/pictures/Averi_Hooper.png';
import AverySmith from './../assets/pictures/Avery_Smith.png';

const WeddingParty = () => {
    return ( <div>
<Navbar/>
        <img src={WestonClements} width="200px"/>
        <img src={IanClements} width="200px"/>
        <img src={KarsonLloyd} width="200px"/>
        <img src={AbbyJohnston} width="200px"/>
        <img src={AveriHooper} width="200px"/>
        <img src={AverySmith} width="200px"/>
        <img src={KamiWalker} width="200px"/>
        <img src={LayklynnEshmeyer} width="200px"/>
        <img src={MargaretMackin} width="200px"/>
        <img src={LaurenAlvarez} width="200px"/>
        
    </div> );
}
 
export default WeddingParty;