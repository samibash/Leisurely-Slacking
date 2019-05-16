import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import BarsList from '../BarsList/BarsList';
// import './HotelLocation.css'


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
        <h2>{bars.name}</h2>
        <li>{bars.address}</li>
        <li>{bars.zip_code}</li>
        <li>{bars.phone_number}</li>
        <li>{bars.type}</li>
          <div>
            <Link to={`/bars/${bars.id}`}>Edit Bars</Link>        
          </div>
        

          <div>
        </div>
        </div>
     
    );
}

export default BarLocation