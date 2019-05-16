import React from 'react';
import BarLocation from '../BarLocation/BarLocation'

const BarsList = ({bars, currentBar, setCurrentBar}) => {
    // console.log(bars)
    const renderData = bars && bars[0]
    ? bars.map((bar, index) => {
        return <BarLocation key={index} bar={bar} currentBar={currentBar} setCurrentBar={setCurrentBar}/>})
        : null
    return(
         <div className="DestinationList">
             <h1>{renderData}</h1>
         </div>
    )
}

export default BarsList