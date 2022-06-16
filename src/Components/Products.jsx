import React from 'react'
import Cards from './Cards'
import Products from './ProductItems'
import './Products.css'

const ProductsItems = ({ handlerClick }) => {

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

export default ProductsItems
