import { useState } from "react";

const BoxForm = props => {
    const [box, setBox] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <div>
            <h2>Create a Box</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color</label>
                <input type="text" />
                <label htmlFor="size">Size</label>
                <input type="number" />
            </form>
        </div>
    );
}

export default BoxForm;