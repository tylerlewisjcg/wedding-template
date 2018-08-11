import React from 'react';
import RexburgTemple from './../assets/pictures/rexburg temple (2).jpg';
import RicksGarden from './../assets/pictures/ricks garden (1).jpg';


const Itinerary = () => {
    return ( <div>
August 24th:
<img src={RexburgTemple} width="500px" alt=""/>
<p>Rexburg, ID LDS Temple
Bride and Groom arrive at 9 am
Guests arrive at 9:30 am
Sealing time 10 am
Pictures following marriage
</p>
<p>Lunch-in
Ammon, ID Chuck-A-Rama Buffet
Reserved for 30 people currently
Arrive at 1:30pm

Wedding party is welcome at the Alvarez's residence in-between activities
</p>
<img src={RicksGarden} width="500px" alt=""/>
<p>Reception
Rexburg, ID Ricks Gardens
Setup @ 4:30pm
Reception from 6-8pm
Take down @8:30pm</p>

        
    </div> );
}
 
export default Itinerary;