import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (


        // <nav className="navbar" role="navigation" aria-label="main navigation">
        //     <div className="navbar-brand">
        //         <a className="navbar-item" href="#">
        //         <img src="https://i.imgur.com/5eSNGAX.png"  width={91} height={28} />
        //         </a>
        //         <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        //             <span aria-hidden="true"></span>
        //             <span aria-hidden="true"></span>
        //             <span aria-hidden="true"></span>
        //         </a>
        //     </div>
        //     <div id="navbarBasicExample" className="navbar-menu">
        //         <div className="navbar-start">
        //             <a className="navbar-item"><Link to={'/'}>Home</Link></a>
        //             <a className="navbar-item"><Link to={'/destinations'}>Destinations</Link></a>
        //             <a className="navbar-item"><Link to={'/hotels'}>Hotels</Link></a>
        //             <a className="navbar-item"><Link to={'/bars'}>Bars</Link></a>
        //             <a className="navbar-item"><Link to={'/create-reviews'}>Reviews</Link></a>
        //         </div>
        //     <div className="navbar-end">
        //         <div className="navbar-item">
        //             <div className="buttons">
        //             <a className="button is-primary">
        //                 <strong>Sign up</strong>
        //             </a>
        //             <a className="button is-light">
        //                 Log in
        //             </a>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        // </nav>

             <header>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/destinations'}>Destinations</Link>
                    <Link to={'/hotels'}>Hotels</Link>
                    <Link to={'/bars'}>Bars</Link>
                    {/* <Link to={'/create-reviews'}>Reviews</Link>
                    <Link to={'/reviews'}>Reviews</Link> */}
                </nav>
            </header> 
        )
    }
}