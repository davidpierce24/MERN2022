import axios from "axios";
import { useState, useEffect } from "react";

const ProductList = props => {

    return (
        <div>
            {
                props.products.map((product, i) => 
                    <p key={i} >{product.title} | ${product.price}</p>
                )
            }
        </div>
    )
}

export default ProductList