import React from 'react';


const CityLocation = ({destination}) => {

    console.log(destination)

    return (
      
      <div className="RestaurantItem">
      <img src={destination.photo} alt ={destination.name}/>
        <p>{destination.description}</p>
      
      </div>
    );
}

export default CityLocation;