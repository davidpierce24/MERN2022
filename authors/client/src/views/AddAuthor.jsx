import AuthorForm from "../components/AuthorForm";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const AddAuthor = props => {
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    const addAuthor = (name) => {
        axios.post('http://localhost:8000/api/authors/create', {
            name
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                console.log(errorArr)
                setError(errorArr);
            })
    }

    return (
        <div>
            <Link to={-1} >Home</Link>
            <h5>Add a new author: </h5>
            {error.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm submitFunc={addAuthor} initialName={''} />
        </div>
    )
}

export default AddAuthor;