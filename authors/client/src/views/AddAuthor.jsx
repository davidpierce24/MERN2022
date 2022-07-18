import AuthorForm from "../components/AuthorForm";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddAuthor = props => {

    const addAuthor = (name) => {
        axios.post('http://localhost:8000/api/authors/create', {
            name
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    return (
        <div>
            <Link to={-1} >Home</Link>
            <h5>Add a new author: </h5>
            <AuthorForm submitFunc={addAuthor} initialName={''} />
        </div>
    )
}

export default AddAuthor;