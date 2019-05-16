import React from 'react';
import BarLocation from '../BarLocation/BarLocation'
import Map from "../Map/Map"

const BarsList = ({bars, currentBar, setCurrentBar}) => {
    // console.log(bars)
    const renderData = bars && bars[0]
    ? bars.map((bar, index) => {
        return <BarLocation key={index} bar={bar} currentBar={currentBar} setCurrentBar={setCurrentBar}/>})
        : null
    return(
         <div className="DestinationList">
        <Map  bars={bars} component={Map}/>

             <h1>{renderData}</h1>
         </div>
    )
}

export default BarsList