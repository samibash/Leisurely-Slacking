import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="destinations">Destinations</Link></li>
                    <li><Link to="bars">Bars</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar