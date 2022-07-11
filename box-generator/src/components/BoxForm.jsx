import { useState } from "react";

const BoxForm = props => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // setBox({"color": e.target[0].value, "size": e.target[1].value })
        let box = {"color": color, "size": size}
        props.boxAdd(box);
        setColor("");
        setSize("");
    }

    return(
        <div>
            <h2>Create a Box</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="color">Color</label>
                    <input type="text" onChange={ e => setColor(e.target.value) } value={ color }/>
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <input type="number" onChange={e => setSize(e.target.value)} value={ size } />
                </div>
                
                <input type="submit" value="Create Box" />
            </form>
        </div>
    );
}

export default BoxForm;