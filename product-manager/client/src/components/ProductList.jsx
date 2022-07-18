import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = props => {

    return (
        <div>
            {
                props.products.map((product, i) => 
                    <p key={i} > <Link to={"/products/" + product._id} > {product.title} | ${product.price}</Link></p>
                )
            }
        </div>
    )
}

export default ProductList