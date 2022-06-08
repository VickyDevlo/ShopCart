import React from "react";
import "./Navbar.css";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Products
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span >
            <ShoppingCartOutlined />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;