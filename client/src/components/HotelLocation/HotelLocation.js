import React from 'react';
import {Link} from 'react-router-dom'

const HotelLocation = ({hotels}) => {

    console.log(hotels)

    return (
      <div className="HotelItem">
     <h2>{hotels.name}</h2>
        <h4>{hotels.location}</h4>
        <li>{hotels.description}</li>
        <div>
        <Link
            to={`/update-hotel/${hotels.id}`}>Edit Hotels</Link>        
            </div>
      </div>
    );
}

export default HotelLocation;