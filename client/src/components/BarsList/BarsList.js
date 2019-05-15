import React from 'react';
import BarLocation from '../BarLocation/BarLocation'

const BarsList = ({bars}) => {
    console.log(bars)
    const renderData = bars && bars[0]
    ? bars.map((bars,index) => {
        return <BarLocation key={index} bars={bars}/>})
        : null
    // const barData = bars && bars.map((bars,index)=>{
    //     return <BarLocation key={index} bars={bars}/>
    // })
        
    return(
         <div className="DestinationList">
             <h1>{renderData}</h1>
         </div>
    )
}

export default BarsList