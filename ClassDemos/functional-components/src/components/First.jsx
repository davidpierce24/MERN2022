import { useState } from "react";

const First = (props) => {
    const [light, setLight] = useState(true);

    const { firstName, lastName, number } = props;

    const lightMode = {
        backgroundColor: "cyan",
        color: "black",
        padding: "10px",
        width: "500px",
        margin: "0 auto"
    }
    
    const darkMode = {
        backgroundColor: "darkblue",
        color: "ghostwhite",
        padding: "10px",
        width: "500px",
        margin: "0 auto"
    }

    return (
        <div style={light ? lightMode : darkMode}>
            <h2>This is my first component</h2>
            <h3>The name passed in was: { firstName } { lastName }</h3>
            <h4>Your number: { number }</h4>
            <button onClick={() => setLight(!light)}>{light ? "Off" : "On"}</button>
        </div>
    )
}

export default First;