import { useState } from "react";

const Form = props =>{
    const [name, setName] = useState("");
    const [realName, setRealName] = useState("");
    const [power, setPower] = useState("");
    const [numSidekicks, setNumSidekicks] = useState(0);
    const [isAlive, setIsAlive] = useState(true);
    const [universe, setUniverse] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        const hero = {name, realName, power, numSidekicks, isAlive, universe};
        props.newHero(hero);
        setName("");
        setRealName("");
        setPower("");
        setNumSidekicks(0);
        setIsAlive(true);
        setUniverse("");
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" onChange={ e => setName(e.target.value) } value={name}/>
                </div>
                <div>
                    <label htmlFor="RealName">Real Name</label>
                    <input type="text" name="RealName" onChange={ e => setRealName(e.target.value) } value={realName} />
                </div>
                <div>
                    <label htmlFor="Power">Power</label>
                    <input type="text" name="Power" onChange={ e => setPower(e.target.value) } value={power} />
                </div>
                <div>
                    <label htmlFor="NumSidekicks">Number of Sidekicks</label>
                    <input type="number" name="NumSidekicks" onChange={ e => setNumSidekicks(e.target.value) } value={numSidekicks} />
                </div>
                <div>
                    <label htmlFor="IsAlive">Are they alive?</label>
                    <input type="checkbox" name="IsAlive" checked={isAlive} onChange={ e => setIsAlive(!isAlive) }  value={isAlive}/>
                </div>
                <div>
                    <label htmlFor="Universe">Universe?</label>
                    <input type="radio" name="Universe" value="DC" onChange={ e => setUniverse(e.target.value) } / >
                    <label htmlFor="Universe">DC</label>
                    <input type="radio" name="Universe" value="Marvel" onChange={ e => setUniverse(e.target.value) } />
                    <label htmlFor="Universe">Marvel</label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;