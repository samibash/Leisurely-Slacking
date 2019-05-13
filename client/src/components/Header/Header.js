import React from 'react';
import {Link} from 'react-router-dom'



const Header = () =>{
return(
    <header>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/destinations'}>Destinations</Link>
            <Link to={'/hotels'}>Hotels</Link>
            <Link to={'/bars'}>Bars</Link>
            <Link to={'/create-reviews'}>Reviews</Link>
        </nav>
    </header>
)

}

export default Header