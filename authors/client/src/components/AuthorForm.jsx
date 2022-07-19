import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = props => {
    const [name, setName] = useState(props.initialName);
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        props.submitFunc(name)
        navigate(-1);
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={onSubmitHandler} className="w-50">
                <div className="form-control my-2">
                    <label htmlFor="">Name: </label>
                    <input type="text" onChange={e => setName(e.target.value)}  value={name} />
                </div>
                <input type="submit" value="Submit" className="btn btn-sm btn-info" /> <Link to={-1} className="btn btn-sm btn-warning" >Cancel</Link>
            </form>
        </div>
    )
}

export default AuthorForm;