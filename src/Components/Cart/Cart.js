import React, { useState, useEffect } from "react";
import { Delete } from "@material-ui/icons";
import './Cart.css'

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);


  useEffect(() => {
    handlePrice();
  });

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (id) => {
    const products = cart.filter((item) => item.id !== id);
    setCart(products);
    handlePrice();
  };

  const handlePrice = () => {
    let res = 0;
    cart.map((item) => (res += item.amount * item.price));
    setPrice(res);
  };
  const handleChange = (item, data) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += data;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  const CheckoutHandler = () => {
    alert("Checkout Successfully");
  };

  return (
    <div className="Wrapper">
      {cart.map((item, Index) => (
        <div className="cart_box" key={Index}>
          <div className="cart_img">
            <img src={item.img} alt="product_img" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, 1)}>+</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>
            
              <Delete /> 
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Order Total:</span>
        <span>Rs- {price}.00</span>
        <button className="CheckOutBtn" onClick={CheckoutHandler}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
