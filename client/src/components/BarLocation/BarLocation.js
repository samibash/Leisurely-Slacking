import React from 'react';
import { Link } from 'react-router-dom'
import './BarLocation.css'

const BarLocation = ({ bar, setCurrentBar }) => {

  return (
    <div className="BarLocation">
      <section className="section" id="dis-dis">
        <div className="columns">
          <div className="column">
            <div className="BarItem">
              <h2><strong>Name: </strong>{bar.name}</h2>
              <p><strong>Address: </strong>{bar.address}</p>
              <p><strong>Zipcode: </strong>{bar.zip_code}</p>
              <p><strong>Phone: </strong>{bar.phone_number}</p>
              <p><strong>Type: </strong>{bar.type}</p>
              <div>
                <button> 
                  <Link 
                    onClick={()=> setCurrentBar(bar)}
                    to={`/bars/${bar.id}`}>Edit Bars
                  </Link>  
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BarLocation;