import React from 'react';
import './BarsList.css';

function BarsList() {
    return (
        <div className="container">
            <div className="list">
                <h1>List of Bars</h1>
                <ul>
                    <li><h3>Bar Name: </h3></li>
                    <li><h3>Bar Location: </h3></li>
                    <li><h3>Bar Phone Number: </h3></li>
                    <li><h3>Bar Description: </h3></li>
                </ul>
            </div>
            <div className="mapbox">
                <h1>MAPBOX HERE</h1>
            </div>
        </div>
    )
}

export default BarsList