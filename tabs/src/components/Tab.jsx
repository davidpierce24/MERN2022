import { useState, useEffect } from "react";

const Tab = props => {
    const [tab, setTab] = useState(props.createTab);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        props.onClick(tab)
        setClicked(true)
    }

    return(
        <div>
            <button style={clicked ? {backgroundColor:"cyan"} : {backgroundColor:"white"}} onClick={handleClick}>{tab.label}</button>
        </div>
    )
}

export default Tab;