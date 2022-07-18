import AuthorList from "../components/AuthorList";
import { useState, useEffect } from "react";
import axios from 'axios';


const Main = props => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [authors]);

    return (
        <div>
            <h1>Favorite Authors</h1>
            
            <AuthorList authors={authors} />
        </div>
    )
}

export default Main;