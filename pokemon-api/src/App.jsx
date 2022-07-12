import './App.css';
import { useState } from 'react';


function App() {
  const [pokeList, setPokeList] = useState([]);

  const handleClick = (e) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => response.json())
      .then(response => setPokeList(response.results))
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }
  
  // const handleClick = (e) => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  //           .then(response => response.json())
  //           .then(response => setPokeList(response.results))
  // }

  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Pokemon</button>
      <ul>
        {
          pokeList.map((pokemon, i) => 
            <li key={i}> {pokemon.name}</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
