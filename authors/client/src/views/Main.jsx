import AuthorList from "../components/AuthorList";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = props => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [authors]);

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/authors/create" >Add an Author</Link>
            {
                loaded && <AuthorList authors={authors} delete={deleteAuthor} />
            }
            
        </div>
    )
}

export default Main;