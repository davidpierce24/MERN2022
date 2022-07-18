import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const Detail = props => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [product]);

    const deleteProduct = (e, id) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => props.removeFromDom(id))
            .catch(err => console.log(err))
        navigate('/products');
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button> <Link to={`/products/${id}/edit`}>Edit</Link> </button><button onClick={e => deleteProduct(e, product._id)} >Delete</button><br />
            <Link to={`/products`}>Home</Link>
        </div>
    )
}

export default Detail;