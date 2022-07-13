import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const People = props => {
    const [person, setPerson] = useState("");
    const [homeworld, setHomeworld] = useState("");
    const { id } = useParams();
    // const {person} = props

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then(res => setPerson(res.data))
        .catch(err => console.log("These aren't the droids you're looking for"))
    }, [id])

    useEffect(() => {
        axios.get(`${person.homeworld}`)
        .then(res => setHomeworld(res.data))
        .catch(err => console.log("These aren't the droids you're looking for"))
    }, [person])


    return (
        <div>
            <h1>{person.name}</h1>
            <h4>Height: {person.height}cm</h4>
            <h4>Weight: {person.mass}kg</h4>
            <h4>Eye Color: {person.eye_color}</h4>
            <h4> <Link to={`/planets/${id}`} >Homeworld: {homeworld.name}</Link> </h4>
        </div>
    )
}

export default People;