import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import BarsList from '../BarsList/BarsList';
// import './HotelLocation.css'

const BarLocation = ({ bar, currentBar, setCurrentBar }) => {

class BarLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    const  {bars} = this.props

    return (
      <div className="BarItem">
        <h2>{bar.name}</h2>
        <li>{bar.address}</li>
        <li>{bar.zip_code}</li>
        <li>{bar.phone_number}</li>
        <li>{bar.type}</li>
          <div>
            <Link 
              onClick={()=> setCurrentBar(bar)}
              to={`/bars/${bar.id}`}>Edit Bars</Link>        
          </div>
      </div>
     
    );
}

export default BarLocation;