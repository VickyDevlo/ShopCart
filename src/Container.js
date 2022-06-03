import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import ProductsList from "./Components/ProductsList/ProductsList";

const Container = () => {
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState([]);

  //Productlist Handler
  const handlerClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  useEffect(() => {
    let data = localStorage.getItem("cart");
    setCart(JSON.parse(data));
  }, [setCart]);

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />

      {show ? (
        <ProductsList handlerClick={handlerClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
};

export default Container;
