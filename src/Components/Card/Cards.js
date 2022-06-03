import React from "react";
import { Button } from '@material-ui/core'

const Cards = ({ items, handleClick }) => {
  const { title, color, price, img } = items;  
 
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="product_img" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{color}</p>
        <p>Price - {price} Rs.</p>
        <Button onClick={() => handleClick(items)} color='secondary' variant="contained">Add to Cart</Button>
      </div>
    </div>
  );
};

export default Cards;