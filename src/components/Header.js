import React from 'react';
import './css/Header.css';
import {NavLink} from "react-router-dom";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import {useStateValue}from './StateProvider';

function Header() {
  const [{ basket }] = useStateValue();
  
  return (
     <>
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary fixed-top">
        <div className="container">
            <NavLink className="navbar-brand" to="/">Shoe Store</NavLink>
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
                        className="nav-link if_hover" to="/product" exact>Product</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link if_hover" to="/checkout" exact> 
                            <ShoppingBasket />
                            <span>{basket?.length}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
            
        </>
  );
}

export default Header;


///{basket?.length}