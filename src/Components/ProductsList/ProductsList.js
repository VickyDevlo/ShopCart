import React from "react";
import "./ProductsList.css";
import Cards from "../Card/Cards";
import Products from "../Products/Products";

const ProductsList = ({ handlerClick }) => {

  return (
    <section>
      {Products.map((items) => (
        <Cards key={items.id} items={items} handlerClick={handlerClick} />
      ))}
    </section>
  );
};

export default ProductsList;
