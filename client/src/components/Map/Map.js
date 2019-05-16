import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import BarPin from './BarPin'
import BarInfo from './BarInfo'
import './Map.css'



const MAPBOX_TOKEN='pk.eyJ1IjoibmllY2V5MDEyMyIsImEiOiJjanZwY2NsamkwcWR4NDRyaHZiN2syajNyIn0.RhkAztXI7yt4MyVHAK6rfw'

class Map extends Component {
    constructor(){
        super()
        this.state ={
            viewport: {
                width: 1000,
                height: 600,
                latitude: 41,
                longitude: -42,
                zoom: 2
              },
              popupInfo: null
        }
    this._renderMarker=this._renderMarker.bind(this)
    this._renderPopup=this._renderPopup.bind(this)
    
    }
    
    _renderMarker(bars, i){
        // console.log('test')
        const lat = Number(bars.latitude);
        const lng = Number(bars.longitude);
        
        return(
       
         <Marker key={`bars-${i}`} longitude={lng} latitude={lat} >
             <BarPin size ={20} 
             onClick={()=>this.setState({popupInfo: bars})}/> 
        </Marker>
           
        )
        
    }
  
    _renderPopup() {
            const { popupInfo } = this.state;
            const lat = Number(popupInfo.latitude)
            const lng = Number(popupInfo.longitude)
            return (
              <Popup tipSize={5}
                anchor="top"
                longitude={lng}
                latitude={lat}
                onClose={() => this.setState({popupInfo: null})} >
                <BarInfo info={popupInfo} />
              </Popup>
            )
           }

  
    render() {
       

        const { bars } = this.props
        // console.log(bars)
       
       
        const { viewport } = this.state;
     
        return (
         <ReactMapGL
            width={viewport.width}
            height={viewport.height}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            zoom={viewport.zoom}
    
            mapStyle="mapbox://styles/mapbox/light-v9"
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={MAPBOX_TOKEN}>
            
            {bars.map(this._renderMarker) }
            {this.state.popupInfo && this._renderPopup()} 
            
        </ReactMapGL>
        );
    }
}

export default Map;