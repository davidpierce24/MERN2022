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
            setFirstNameError("Yo name gotta be at least 2 characters!");
        } else {
            setFirstNameError("");
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Yo name gotta be here!");
        } else if (e.target.value.length < 2) {
            setLastNameError("Yo name gotta be at least 2 characters!");
        } else {
            setLastNameError("");
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Yo email gotta be here!");
        } else if (e.target.value.length < 5) {
            setEmailError("Yo email gotta be at least 5 characters!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Yo password gotta be here!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Yo password gotta be at least 8 characters!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value < 1) {
            setConfirmPasswordError("Yo confirm password gotta be here!");
        } else if (e.target.value !== password) {
            setConfirmPasswordError("Yo passwords gotta match!");
        } else {
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }


    return (
        <div style={style}>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange = { handleFirstName } value={ firstName }/>
                    {
                        firstNameError ? <p style={{color:"red"}}> { firstNameError } </p> : ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange = { handleLastName } value={ lastName } />
                    {
                        lastNameError ? <p style={{color:"red"}}> { lastNameError } </p> : ""
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange = { handleEmail } value={ email } />
                    {
                        emailError ? <p style={{color:"red"}}> { emailError } </p> : ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange = { handlePassword } value={ password } />
                    {
                        passwordError ? <p style={{color:"red"}}> { passwordError } </p> : ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange = { handleConfirmPassword } value={ confirmPassword } />
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