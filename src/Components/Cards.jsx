import React from "react";
import { Box, Button } from "@material-ui/core";
 
const Cards = ({ items, handlerClick }) => {

    const { title, color, price, img } = items;

    return (
        <Box className="Cards-Container">      
            <div className="cards" >
                <div className="image_box">
                    <img src={img} alt="product_img" />
                </div>
                <div className="details">
                    <p>{title}</p>
                    <p>{color}</p>
                    <p>Price - {price} Rs.</p>
                    <Button color="secondary" variant="contained" onClick={() => handlerClick(items)} >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </Box>
    );
};

export default Cards