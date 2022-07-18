import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const Detail = props => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [product]);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button> <Link to={`/products/${id}/edit`}>Edit</Link> </button>
        </div>
    )
}

export default Detail;