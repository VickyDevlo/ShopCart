import React, { useEffect, useState } from "react";
import Cart from './Components/Cart/Cart'
import Navbar from './Components/Navbar/Navbar'
import ProductsList from "./Components/ProductsList/ProductsList";

const App = () => {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  useEffect(() => {
    let data = window.localStorage.getItem("cart");
    setCart(JSON.parse(data));
  }, [setCart]);

  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      
      {show ? (
        <ProductsList handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </>
  );
};

export default App;
