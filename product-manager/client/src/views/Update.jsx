import { useState, useEffect, useInsertionEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = props => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams

    return (
        <div>

        </div>
    )
}

export default Update;