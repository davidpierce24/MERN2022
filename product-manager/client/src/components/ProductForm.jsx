import axios from 'axios';
import { useState, useEffect } from 'react';

const ProductForm = props => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');


    const submitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products/create', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setTitle("");
        setPrice(0);
        setDescription("");
    }


    return (
        <div>
            <h1>Create a Product</h1>
            <form onSubmit={submitHandler}>
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
                <input type="submit" value="Add Product" />
            </form>
        </div>
    )
}

export default ProductForm;