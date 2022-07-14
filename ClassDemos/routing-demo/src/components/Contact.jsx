import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Contact = props => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();
    
    const sendSurvey = (e) => {
        e.preventDefault();
        navigate("/about")
    }

    const checkPasswords = e => {
        if(password == confirm){
            return true;
        }
        return false;
    }

    return (
        <div>
            <h1>Hi Conatc</h1>
            <form onSubmit={ sendSurvey }>
                <div>
                    <label>Your Name:</label>
                    <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
                </div>
                <div>
                    <label>Your Comment:</label>
                    <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" onChange={ e => setPassword(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input type="password" onChange={ e => {
                        setConfirm(e.target.value) 
                    }} />
                </div>
                {password == confirm ? "" : <p>Passwords much match</p>}
                <input type="submit" value="Submit Survey" />
            </form>
        </div>
    )
}

export default Contact;