import { useState, useEffect, useInsertionEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Update = props => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        navigate('/products/' + id)
    }


    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" onChange={e => setPrice(e.target.value)} value={price} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" cols="25" rows="5" onChange={e => setDescription(e.target.value)} value={description}></textarea>
                </div>
                <input type="submit" value="Update Product" />
            </form>
        </div>
    )
}

export default Update;