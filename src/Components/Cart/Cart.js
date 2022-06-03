import React, { useState, useEffect } from "react";
import { Delete } from "@material-ui/icons";
import "./Cart.css";
 

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Remove Product
  const handlerRemove = (id) => {
    const products = cart.filter((item) => item.id !== id);
    setCart(products);
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

  //Price Handler
  const handlerChange = (item, data) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += data;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="Wrapper">
      {cart.map((item, Index) => (
        <div className="cart_box" key={Index}>
          <div className="cart_img">
            <img src={item.img} alt="product_img" />
            <p>
              {item.title} ({item.color})
            </p>
          </div>
          <div>
            <button onClick={() => handlerChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handlerChange(item, 1)}>+</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handlerRemove(item.id)}>
              <Delete />
            </button>
          </div>
        </div>
      ))}

      {
        price ? (  
          <div className="total">
            <span>Order Total:</span> 
            <span>Rs- {price}.00</span>
            <>
              <button className="CheckoutBtn">Checkout</button>
              <button className="CheckoutBtn" onClick={DeleteAllHandler}>
                Clear All
              </button>
            </>
          </div>
        ) :
        (
          <img
              src="https://www.apnashopping.in/assets/img/payment/Empty-Cart.jpg"
              alt="emptycart"
              className="EmptyCart"
          />
        )
      }
    </div>
  );
};

export default Cart;
