import './App.css';
import Tab from './components/Tab';

import { useState } from 'react';


function App() {
  
  const createTab = tab => {
    setTab(tab);
  }

  return (
    <div className="App">
      <Tab createTab={{"label":"Tab 1", "content":[1,2,4,4,6,76,7,6,4,3,3,2]}}/>
    </div>
  );
}

export default App;
