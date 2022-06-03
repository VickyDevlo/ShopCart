import React  from "react";
import Cards from "../Card/Cards";
import "./ProductsList.css";
import Products from '../Products/Products'

const ProductsList = ({ handleClick }) => { 
   
  return (
    <section>
      {Products.map((items) => (  
        <Cards key={items.id} items={items} handleClick={handleClick} />
        )
        )
      }
      
    </section>
  );
};

export default ProductsList;