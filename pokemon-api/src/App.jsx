import './App.css';
import { useState } from 'react';


function App() {
  const [pokeList, setPokeList] = useState("");

  const handleClick = (e) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json)
      .then(response => setPokeList(response.results))
      .catch(err => console.log(err))
  }

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
