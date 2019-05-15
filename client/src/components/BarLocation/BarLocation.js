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
      <section className="section">
        <div className="columns">
          <div className="column">
            MapBox Here
          </div>
          <div className="column">
            <p><strong>Name: </strong>{bars.name}</p>
            <p><strong>Address: </strong>{bars.address}</p>
            <p><strong>Zipcode: </strong>{bars.zip_code}</p>
            <p><strong>Phone: </strong>{bars.phone_number}</p>
            <p><strong>Type: </strong>{bars.type}</p>
            <div>
              <Link to={`/update-bar/${bars.id}`}>Edit Bars</Link>        
            </div>
          </div>
        </div>
      </section>

    // <nav className="pagination" role="navigation" aria-label="pagination">
    //   <a className="pagination-previous" title="This is the first page" disabled>Previous</a>
    //   <a className="pagination-next">Next page</a>
    //     <ul className="pagination-list">
    //       <li>
    //         <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
    //       </li>
    //       <li>
    //         <a className="pagination-link" aria-label="Goto page 2">2</a>
    //       </li>
    //       <li>
    //         <a className="pagination-link" aria-label="Goto page 3">3</a>
    //       </li>
    //     </ul>
    // </nav>

    )
  }
}

export default BarLocation