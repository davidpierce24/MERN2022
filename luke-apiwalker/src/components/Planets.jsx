import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Planets = props => {
    const [planet, setPlanet] = useState("");
    const { id } = useParams();
    
    // const {planet} = props

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(res => setPlanet(res.data))
        .catch(err => console.log("These aren't the droids you're looking for"))
    }, [id])

    return (
        <div>
            <h1>{planet.name}</h1>
            <h4>Climate: {planet.climate}</h4>
            <h4>Terrain: {planet.terrain}</h4>
            <h4>Population: {parseFloat(planet.population).toLocaleString('en')} </h4>
        </div>
    )
}

export default Planets;