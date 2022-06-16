import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@material-ui/icons";
import "./Navbar.css";
const Navbar = ({ size }) => {
  return (
    <nav className="navbar navbar-expand-lg Nav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products" >
              Shopping Now
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/cart" className="Cart">
          <ShoppingCartOutlined /> 
          <span>{size}</span>    
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
