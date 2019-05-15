import React from 'react';

const CityLocation = ({ destination }) => {

  console.log(destination)

  return (
    <div>
      <img src={destination.photo} alt={destination.name}/>
      <p>{destination.description}</p>
    </div>
  );
}

export default CityLocation;