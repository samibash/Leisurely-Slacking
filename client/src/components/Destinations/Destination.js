import React from 'react'
import './Destination.css'

function Destination() {
    return (
        <div>
            <h1>This is the destination page</h1>
            <div className="destination">
                <h2>Destination Name</h2>
                <div className="destination-image">IMAGE_URL</div>
                <p>DESCRIPTION_OF_DESTINATION</p>
                <p>Best place to stay: HOTEL_NAME</p>
                <p>DESCRIPTION_OF_HOTEL</p>
                <p>Link: HOTEL_LINK</p>
            </div>
        </div>
    )
}

export default Destination