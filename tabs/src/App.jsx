import './App.css';
import Tab from './components/Tab';

import { useState } from 'react';


function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (tab) => {
    setDisplay(tab);
    console.log(display)
  }


  return (
    <div className="App">
      <div style={{display:"flex", gap: "10px", margin:"30px"}}>
      <Tab createTab={{"label":"Tab 1", "content":[1,2,4,4,6,76,7,6,4,3,3,2]}} onClick={handleClick}/>
      <Tab createTab={{"label":"Tab 2", "content":[1,2,4,4,6,76,7]}} onClick={handleClick}/>
      <Tab createTab={{"label":"Tab 3", "content":[1,2,4]} } onClick={handleClick} />
      </div>
      <div>
        {display.content}
      </div>
    </div>
  );
}

export default App;
