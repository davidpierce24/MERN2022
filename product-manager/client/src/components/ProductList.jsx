import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = props => {
    const navigate = useNavigate();

    const deleteProduct = (e, id) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => props.removeFromDom(id))
            .catch(err => console.log(err))
        navigate('/products');
    }

    return (
        <div>
            {
                props.products.map((product, i) => 
                    <p key={i} > <Link to={"/products/" + product._id} > {product.title} | ${product.price}</Link>
                    |
                    <button onClick={e => deleteProduct(e, product._id)} >Delete</button>
                    </p>
                )
            }
        </div>
    )
}

export default ProductList