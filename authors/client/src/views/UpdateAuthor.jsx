import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import { useState, useEffect } from 'react';
import axios from 'axios';


const UpdateAuthor = props => {
    const [name, setName] = useState('');
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name)
                setLoaded(true)
                console.log(res.data.name)
            })
            .catch(err => console.log(err))
    }, [])

    const updateAuthor = name => {
        axios.put('http://localhost:8000/api/authors/update/' + id, {
            name
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to={-1} >Home</Link>
            <h5>Edit author: </h5>
            {
                loaded && (
                    <AuthorForm submitFunc={updateAuthor} initialName={name}/>
                )
            }
            
        </div>
    )
}

export default UpdateAuthor;