import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from './images/woodland.png';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container mx-auto">
            <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="logoimage" className="logo__image" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active"
                        className="nav-link if_hover" to="/" exact >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active"
                        className="nav-link if_hover" to="/services" exact >Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link if_hover" to="/about" exact>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link if_hover" to="/contact" exact>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </>
    );
}
export default Navbar;