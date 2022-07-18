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
        <div className="">
            <Link to={-1} ></Link>
            <h4>Add a new author: </h4>
            <AuthorForm submitFunc={addAuthor} initialName={''} />
        </div>
    )
}

export default AddAuthor;