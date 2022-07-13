import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const People = props => {
    const [person, setPerson] = useState("");
    const [homeworld, setHomeworld] = useState("");
    const [homeid, setHomeid] = useState([]);
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

    

    // useEffect(() => {
    //     setHomeid(person.homeworld)
    //     // setHomeid(...homeid.replace(/\D/g, ''))
    //     console.log(homeid)
    // },[person])
        


    
    // console.log(home)
    // let home2 = 
    
    

    // let planetId = person.homeworld
    // planetId.slice(10, planetId.length)
    // const url = new URL(`${person.homeworld}`); 
    // url.pathname; 
    // => '/path/index.html'
    // let fresh = planetId.match(/\d+/g)
    // let fresh2 = planetId.replace(/[\D]/g, '');
    // console.log(homeid)
    // console.log(fresh2)

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