import React from 'react';
import {Link} from 'react-router-dom'

const CityLocation = ({destination}) => {

    console.log(destination)

    return (
      <div className="RestaurantItem">
      <img src={destination.photo} alt ={destination.name}/>
        <p>{destination.description}</p>
      
        <div>
        <Link
            to={`/update-restaurant/${destination.id}`}>Edit Destination</Link></div>
      </div>
    );
}

export default CityLocation;