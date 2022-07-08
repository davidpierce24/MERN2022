import './App.css';
import First from './components/First';
import { useState } from 'react';

function App() {
  const [light, setLight] = useState(true);

  const lightMode = {
    backgroundColor: "cyan",
    color: "black",
  }

  const darkMode = {
      backgroundColor: "darkblue",
      color: "ghostwhite",
  }

  return (
    <div className="App" style={light ? lightMode : darkMode}>
      <h2>Welcome to Functional Components</h2>
      <button onClick={() => setLight(!light)}>{light ? "DarkMode" : "LightMode"}</button>
      <First firstName = { "Bizmo" } lastName = { "Funions" } number = { 24 } />
      <First firstName = { "Bizmo" } lastName = { "Funions" } number = { 24 } />
      <First firstName = { "Bizmo" } lastName = { "Funions" } number = { 24 } />
      <First firstName = { "Bizmo" } lastName = { "Funions" } number = { 24 } />
    </div>
  );
}

export default App;
