import './App.css';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
// import axios from "axios";

function App() {
  const [search, setSearch] = useState("people");
  const [id, setId] = useState(1);
  // const [person, setPerson] = useState("");
  // const [planet, setPlanet] = useState("");
  const navigate = useNavigate();



  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(id)
    console.log(search)
    if(search === "people") {
      // axios.get(`https://swapi.dev/api/people/${id}/`)
      //   .then(res => setPerson(res.data))
      //   .catch(err => console.log("These aren't the droids you're looking for"))
        navigate(`/people/${id}`)
      }
      if(search === "planets") {
        // axios.get(`https://swapi.dev/api/planets/${id}/`)
        // .then(res => setPlanet(res.data))
        // .catch(err => console.log("These aren't the droids you're looking for"))
        navigate(`/planets/${id}`)
      }
    }

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div style={{display:"flex", justifyContent:"center", gap:"10px", margin:"20px"}}>
          <label htmlFor="searchFor">Search For: </label>
          <select name="searchFor" defaultValue={"people"} onChange={ e => setSearch(e.target.value) }>
            <option value="people">people</option>
            <option value="planets">planets</option>
          </select>
          <label htmlFor="id">ID: </label>
          <input type="number" onChange={ e => setId(e.target.value) } />
          <input type="submit" value="Search" style={{backgroundColor:"cyan"}}/>
        </div>
      </form>

      <Routes>
        <Route path='' />
        <Route path='/people/:id' element={ <People  /> } />
        <Route path='/planets/:id' element={ <Planets /> } />
      </Routes>
    </div>
  );
}

export default App;
