import React from 'react';
import {Link} from 'react-router-dom'

const BarLocation = ({ bar, currentBar, setCurrentBar }) => {

    return (
      <div className="BarItem">
        <h2>{bar.name}</h2>
        <li>{bar.address}</li>
        <li>{bar.zip_code}</li>
        <li>{bar.phone_number}</li>
        <li>{bar.type}</li>
          <div>
          <Link 
              onClick={()=> setCurrentBar(bar)}
              to={`/bars/${bar.id}`}>Edit Bars</Link>           
          </div>


          <div>
        </div>
        </div>
      

    );
}


export default BarLocation;