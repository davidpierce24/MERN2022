import { useState } from "react";

const BoxForm = props => {
    const [box, setBox] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setBox({"color": e.target[0].value, "size": e.target[1].value })
        props.boxAdd(box);
        
    }

    return(
        <div>
            <h2>Create a Box</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="color">Color</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <input type="number" />
                </div>
                
                <input type="submit" value="Create Box" />
            </form>
        </div>
    );
}

export default BoxForm;