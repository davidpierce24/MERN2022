
import './App.css';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [hero, setHero] = useState({});
  

  const newHero = hero => {
    setHero(hero);
  }

  return (
    <div className="App">
      <Form newHero={newHero} />
      <Results myHero={hero} />
    </div>
  );
}

export default App;
