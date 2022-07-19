import { Link } from 'react-router-dom'
import axios from 'axios';

const AuthorList = props => {

    // const deleteAuthor = (id) => {
    //     axios.delete('http://localhost:8000/api/authors/delete/' + id)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    return (
        <div className='d-flex justify-content-center'>
            <table className='table table-striped w-50'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.authors.sort((a, b) => a.name.localeCompare(b.name)).map((author, i) => 
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td> <Link to={"/authors/" + author._id + "/edit" } className="btn btn-sm btn-warning">Edit</Link> | <button className='btn btn-sm btn-danger' onClick={e => props.delete(author._id)}>Delete</button></td>
                        </tr>
                    )
                }
                </tbody>
                
            </table>
            
        </div>
    )
}

export default AuthorList;