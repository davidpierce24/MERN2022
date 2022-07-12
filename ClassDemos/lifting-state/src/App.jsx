
import './App.css';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [heroList, setHeroList] = useState([]);


  const newHero = hero => {
    setHeroList([...heroList, hero]);
  }

  return (
    <div className="App">
      <Form newHero={newHero} />
      <Results Heros={heroList} />
    </div>
  );
}

export default App;
