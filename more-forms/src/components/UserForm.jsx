import { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const style = {
        padding: "80px"
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("Yo name gotta be here!");
        } else if (e.target.value.length < 2) {
            setFirstNameError("Yo name gotta be longer!");
        } else {
            setFirstName("");
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Yo name gotta be here!");
        } else if (e.target.value.length < 2) {
            setLastNameError("Yo name gotta be longer!");
        } else {
            setLastName("");
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Yo email gotta be here!");
        } else if (e.target.value.length < 5) {
            setEmailError("Yo email gotta be longer!");
        } else {
            setEmail("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Yo password gotta be here!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Yo password gotta be longer!");
        } else {
            setPassword("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value < 1) {
            setConfirmPasswordError("Yo confirm password gotta be here!");
        } else if (e.target.value !== password) {
            setConfirmPasswordError("Yo passwords gotta match!");
        } else {
            setConfirmPassword("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
    }


    return (
        <div style={style}>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange = { handleFirstName } />
                    {
                        firstNameError ? <p style={{color:"red"}}> { firstNameError } </p> : ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange = { handleLastName } />
                    {
                        lastNameError ? <p style={{color:"red"}}> { lastNameError } </p> : ""
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange = { handleEmail } />
                    {
                        emailError ? <p style={{color:"red"}}> { emailError } </p> : ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange = { handlePassword } />
                    {
                        passwordError ? <p style={{color:"red"}}> { passwordError } </p> : ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange = { handleConfirmPassword } />
                    {
                        confirmPasswordError ? <p style={{color:"red"}}> { confirmPasswordError } </p> : ""
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <p>First Name: { firstName } </p>
                <p>Last Name: { lastName } </p>
                <p>Email: { email } </p>
                <p>Password: { password } </p>
                <p>Confirm Password: { confirmPassword } </p>
            </div>
        </div>
            
        )

    
};

export default UserForm;