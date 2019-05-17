import React from 'react';
import './CityLocation.css'

const CityLocation = ({ destination }) => {

  return (
    <div className="destination-card">
      <img src={destination.photo} alt={destination.name}/>
      <p>{destination.description}</p>
    </div>
  );
}

export default CityLocation;