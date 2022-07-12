import './App.css';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <form action="">
        <div style={{display:"flex", justifyContent:"center", gap:"10px", margin:"20px"}}>
          <label htmlFor="searchFor">Search For: </label>
          <select name="searchFor">
            <option value="people">people</option>
            <option value="planets">planets</option>
          </select>
          <label htmlFor="id">ID: </label>
          <input type="number" />
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
