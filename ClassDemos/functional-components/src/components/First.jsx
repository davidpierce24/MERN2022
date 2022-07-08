import { useState } from "react";

const First = (props) => {
    const [light, setLight] = useState(true);

    const { firstName, lastName, number } = props;

    return (
        <div>
            <h2>This is my first component</h2>
            <h3>The name passed in was: { firstName } { lastName }</h3>
            <h4>Your number: { number }</h4>
        </div>
    )
}

export default First;