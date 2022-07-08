import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <h2>Welcome to Functional Components</h2>
      <First firstName = { "Bizmo" } lastName = { "Funions" } number = { 24 } />
    </div>
  );
}

export default App;
