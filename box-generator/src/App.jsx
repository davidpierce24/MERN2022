import './App.css';
import { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';


function App() {
  const [boxList, setBoxList] = useState([]);

  const boxAdd = ( newBox ) => {
    setBoxList([...boxList, newBox]);
  }

  return (
    <div className="App">
      <BoxForm boxAdd={ boxAdd } />
      <BoxDisplay boxList={ boxList } />
    </div>
  );
}

export default App;
