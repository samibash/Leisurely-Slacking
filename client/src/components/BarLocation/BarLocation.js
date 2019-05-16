import React from 'react';
import {Link} from 'react-router-dom'
import './BarLocation.css'
// import Map from '../Map/Map';


const BarLocation = ({ bar, currentBar, setCurrentBar }) => {

    return (
    <div className="BarLocation">
      <section className="section">
        <div className="columns">
          <div className="column">
          {/* <Map  bars={} component={Map}/> */}
          </div>
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




      // <div className="BarItem">
      //   <h2>{bar.name}</h2>
      //   <li>{bar.address}</li>
      //   <li>{bar.zip_code}</li>
      //   <li>{bar.phone_number}</li>
      //   <li>{bar.type}</li>
      //     <div>
      //     <Link 
      //         onClick={()=> setCurrentBar(bar)}
      //         to={`/bars/${bar.id}`}>Edit Bars</Link>           
      //     </div>


      //     <div>
      //   </div>
      //   </div>
    )
}


export default BarLocation;