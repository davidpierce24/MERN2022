import { Link } from 'react-router-dom'
import axios from 'axios';

const AuthorList = props => {

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
                    props.authors.map((author, i) => 
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td> <Link to={"/authors/" + author._id + "/edit" } className="btn btn-sm btn-warning">Edit</Link> | Delete</td>
                        </tr>
                    )
                }
                </tbody>
                
            </table>
            
        </div>
    )
}

export default AuthorList;