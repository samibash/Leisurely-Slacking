import React from 'react';
import HotelLocation from '../HotelLocation/HotelLocation'


const HotelList = ({hotels}) => {
    const hotelData = hotels && hotels.map((hotels,index) => {
        return <HotelLocation key={index} hotels={hotels}/>
    })
//    console.log(hotels)
    return(
        <div className="HotelsList">
            <h1>{hotelData}</h1>
        </div>
    )
}

export default HotelList