import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                <img src="https://i.imgur.com/5eSNGAX.png"  width={91} height={28} />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <p className="navbar-item"><Link to={'/'}>Home</Link></p>
                    <p className="navbar-item"><Link to={'/destinations'}>Destinations</Link></p>
                    <p className="navbar-item"><Link to={'/hotels'}>Hotels</Link></p>
                    <p className="navbar-item"><Link to={'/bars'}>Bars</Link></p>
                </div>
            </div>
        </nav>
        )
    }
}