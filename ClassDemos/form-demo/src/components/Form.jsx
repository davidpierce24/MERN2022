import { useState } from "react";

const Form = props => {
    // these are the attributes of the item I'm making
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [canRender, setCanRender] = useState(false);

    const onSubmitHandler = e => {
        // prevent default prevents page from refreshing
        e.preventDefault();
        setCanRender(true)
        const pokemon = {"name": name, "pic": picture}
        return pokemon
    }

    const textValid = input => {
        if(input.length == 0) {
            return false;
        }
        return true;
    }


    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" onChange={ e => setName(e.target.value) } />
                    { textValid(name) ? "" : <p>Name is required!</p> }
                </div>
                <div>
                    <label htmlFor="Picture">Picture</label>
                    <input type="text" onChange={ e => setPicture(e.target.value) } />
                    { textValid(picture) ? "" : <p>Picture is required!</p> }
                </div>
                <input type="submit" value="Submit" />
            </form>
            {
                canRender ? 
                <div>
                    <h4>Name: {name} </h4>
                    <img src={picture} alt="it is what it is" />
                </div> : ""
            }
            
        </div>
    )
}

export default Form;