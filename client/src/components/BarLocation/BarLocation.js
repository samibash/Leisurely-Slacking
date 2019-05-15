import React from 'react';
import {Link} from 'react-router-dom'

const BarLocation = ({ bars }) => {

    return (
      <div className="BarItem">
        <h2>{bars.name}</h2>
        <li>{bars.address}</li>
        <li>{bars.zip_code}</li>
        <li>{bars.phone_number}</li>
        <li>{bars.type}</li>
          <div>
            <Link to={`/update-bar/${bars.id}`}>Edit Bars</Link>        
          </div>
      </div>
    );
}

export default BarLocation;