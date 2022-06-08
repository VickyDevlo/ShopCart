  
import React from "react";
import Cards from "../Card/Cards";
import Products from "../Products/Products";
import "./ProductsList.css";

const ProductsList = ({ handlerClick }) => {

  return (
    <section>
      {
        Products.map((items) => ( 
          
              <Cards key={items.id} items={items} handlerClick={handlerClick} />
          
      
        ))
      }
    </section>
  );
};

export default ProductsList;
