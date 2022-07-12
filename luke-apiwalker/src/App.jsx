import './App.css';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();


  const onSubmitHandler = e => {
    e.preventDefault();
    if(id == "people") {
      navigate(`/people/${id}`)
    }
    if(id == "planets") {
      navigate(`/planets/${id}`)
    }
  }

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div style={{display:"flex", justifyContent:"center", gap:"10px", margin:"20px"}}>
          <label htmlFor="searchFor">Search For: </label>
          <select name="searchFor" onChange={ e => setSearch(e.target.value) }>
            <option value="people">people</option>
            <option value="planets">planets</option>
          </select>
          <label htmlFor="id">ID: </label>
          <input type="number" onChange={ e => setId(e.target.value) } />
          <input type="submit" value="Search" style={{backgroundColor:"cyan"}}/>
        </div>
      </form>

      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
