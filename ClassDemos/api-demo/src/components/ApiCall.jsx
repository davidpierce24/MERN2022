import axios from "axios";
import { useState, useEffect } from "react";

const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);
    const [inputPokemon, setInputPokemon] = useState("");
    const [callPokemon, setCallPokemon] = useState("pikachu");
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${callPokemon}`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    },[callPokemon])

    const fetchPokemon = e => {
        e.preventDefault();
        setCallPokemon(inputPokemon);
    }


    // useEffect(() => {
    //     axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    //     .then(res => call.push(res.data))
    // })

    return (
        <div>
            <h2>My call</h2>
            <input type="text" name="newPokemon" onChange={e => setInputPokemon(e.target.value)} />
            <input type="submit" name="Fetch Pokemon" onClick={fetchPokemon} /><br />
            {
                pokemon ? <>
                    <img src={pokemon.sprites.front_default} alt="sprite" />
                    <h3>{pokemon.name}</h3>
                </> : ""
            }
            
        </div>
    )
}

export default ApiCall;