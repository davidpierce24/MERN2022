import { useState, useEffect } from "react";

const AuthorForm = props => {
    const [name, setName] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="w-50">
                <div className="form-control">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={e => setName(e.target.value)}  value={name} />
                </div>
                <input type="submit" value="Submit" className="btn btn-info" />
            </form>
        </div>
    )
}

export default AuthorForm;