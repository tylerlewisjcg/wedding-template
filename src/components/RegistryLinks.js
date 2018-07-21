import React from 'react';
import Navbar from './Navbar';
const RegistryLinks = () => {
    return ( <div>
        <Navbar/>
        <h1>Why Thank You!</h1>
        <p>While gifts are certainly not expected, 
            they are greatly appreciated. 
            We consider the attendance of our family and friends the best gift of all.
             With that said, if anyone feels led to bring something extra,
              here are some things we could use as we start our next chapter together. 
        </p>
        <a href="http://www.walmart.com/lists/view-wedding-registry-items?id=3bfc5fb1-051e-404f-b013-e0859ba983ed"><p>Walmart</p></a>
        <a href="https://www.target.com/gift-registry/giftgiver?registryId=e644be515613473bb2879f537806bdbd"><p>Target</p></a>
    </div> );
}
 
export default RegistryLinks;