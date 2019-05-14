import React from 'react';
import BarLocation from '../BarLocation/BarLocation'


const BarsList = ({bars}) =>{
  
    const barData =  bars && bars.map((bars,index)=>{
        return <BarLocation key={index} bars={bars}/>
         })
        
     return(
         <div className="DestinationList">
             <h1>{barData}</h1>
            
         </div>
     )


}

export default BarsList