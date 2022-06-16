import React, { useState, useEffect } from "react";
import { Delete } from "@material-ui/icons";
import "./ProductList.css"
import { Box, Button } from "@material-ui/core";


const ProductList = ({ cart, setCart }) => {

  const [price, setPrice] = useState(0);

  useEffect(() => { 
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart]);
  
 
  const handlerRemove = (id) => {
    const product = cart.filter((item) => item.id !== id);
    setCart(product);
    handlerPrice();
    alert("Product Removed");
  };

  const DeleteAllHandler = () => {
    alert("All Products Removed");
    setCart([]);
  };

  const handlerPrice = () => {
    let res = 0;
    cart.map((item) => (res += item.amount * item.price));
    setPrice(res);
  };

  useEffect(() => {
    handlerPrice();
  });

  const handlerChange = (item, data) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += data;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <Box className="Wrapper">
      {
        cart.map((item, Index) => (
          <div className="cart_box" key={Index}>
            <div className="cart_img">
              <img src={item.img} alt="product_img" />
              <p>
                {item.title} ({item.color})
              </p>
            </div>
            <div>
              <Button onClick={() => handlerChange(item, -1)}> - </Button>  
              <Button color="primary" variant="text" style={{fontSize:'12px'}}>{item.amount}</Button>
              <Button onClick={() => handlerChange(item, 1)}> + </Button>
            </div>
            <div>
              <span>{item.amount * item.price }</span>
              <button onClick={() => handlerRemove(item.id)}>
                <Delete />
              </button>
            </div>
          </div>
        ))
      }

      {
        price ? (
          <div className="total">
            <span>Order Total:</span>
            <span>Rs- {price}.00</span>
            <div>
              <button className="Btn">Checkout From Cart</button>
              <button className="Btn" onClick={DeleteAllHandler}> Remove All From Cart </button>
            </div>
          </div>
        ) : (
          <div  className="EmptyCart">
            <img
              src="https://www.apnashopping.in/assets/img/payment/Empty-Cart.jpg"
              alt="emptycart_img"
            
            />
          </div>
        )
      }
      
    </Box>
  );
};

export default ProductList;