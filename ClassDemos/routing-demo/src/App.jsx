import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from "./components/About"


function App() {
  return (
    <div className="App">
      <h1>Home page</h1>
      <Routes>
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
