import AuthorList from "../components/AuthorList";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = props => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [authors]);

    return (
        <div>
            <Link to="/authors/create" >Add an Author</Link>
            <AuthorList authors={authors} />
        </div>
    )
}

export default Main;