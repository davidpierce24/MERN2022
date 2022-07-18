import { useState, useEffect } from "react";

const AuthorForm = props => {
    const [name, setName] = useState(props.initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        props.submitFunc(name)
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={onSubmitHandler} className="w-50">
                <div className="form-control my-2">
                    <label htmlFor="">Name: </label>
                    <input type="text" onChange={e => setName(e.target.value)}  value={name} />
                </div>
                <input type="submit" value="Submit" className="btn btn-info" />
            </form>
        </div>
    )
}

export default AuthorForm;