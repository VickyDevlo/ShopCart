import React, { useState,useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'; 
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Box } from '@material-ui/core';
import Navbar from './Components/Navbar';
import ProductsItems from "./Components/Products"; 
import ProductList from "./Components/ProductList";

const App = () => {

  const [cart, setCart] = useState([]);

  const handlerClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  
  useEffect(() => {
    let data = window.localStorage.getItem("cart") || [];  
    data.length > 0 && setCart(JSON.parse(data)); 
  },[]);


  return (
    <Box className="App">   
        <Navbar size={cart.length}/>
        <Routes>
          <Route path='/' element={ <h1 style={{padding:'20px'}}> 🛒 Welcome to Shopping Cart 🛒 </h1> } />        
          <Route path='/products' element={ <ProductsItems handlerClick={ handlerClick } />}/>        
          <Route path='/cart' element={ <ProductList cart={cart} setCart={ setCart } />}/>
        </Routes>      
    </Box>
  );
}

export default App;