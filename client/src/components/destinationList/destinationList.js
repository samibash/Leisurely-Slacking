import React from 'react';
import CityLocation from '../CityLocation/CityLocation'
import './destinationList.css'


const DestinationList = ({ destinations }) => {
    const data = destinations && destinations.map((destination,index) => {
        return <CityLocation key={index} destination={destination}/>
    })
   
    return(
        <div className="DestinationList">
                <section className="section">
                    <div className="columns">
                        <div className="column">
                        <h1 className="title is-1">Destinations</h1>                         
                        {data}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default DestinationList
