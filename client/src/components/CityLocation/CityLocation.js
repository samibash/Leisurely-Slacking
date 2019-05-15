import React from 'react';

const CityLocation = ({ destination }) => {

    return (
      
      <div className="DestinationItem">
      <img src={destination.photo} alt ={destination.name}/>
        <p>{destination.description}</p>
      
      </div>
    );
}

export default CityLocation;