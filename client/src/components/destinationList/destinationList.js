import React from 'react';
import CityLocation from '../CityLocation/CityLocation'


const DestinationList = ({ destinations }) => {
    const data = destinations && destinations.map((destination,index) => {
        return <CityLocation key={index} destination={destination}/>
    })
   
    return(
        <div className="DestinationList">
            <h1>{data}</h1>
        </div>
    )
}


export default DestinationList
