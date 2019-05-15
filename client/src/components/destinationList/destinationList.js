import React from 'react';
import CityLocation from '../CityLocation/CityLocation'


const DestinationList = ({ destinations }) => {
    const data = destinations && destinations.map((destination,index) => {
        return <CityLocation key={index} destination={destination}/>
    })
   
    return(
        <div className="DestinationList">
                <section className="section">
                    <div className="columns">
                        <div className="column">
                            {data}
                        </div>
                    </div>
                </section>
        </div>
    )
}


export default DestinationList
