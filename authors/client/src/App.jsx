import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import UpdateAuthor from './views/UpdateAuthor';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/authors" />
        <Route element={<AddAuthor />} path="/authors/create" />
        <Route element={<UpdateAuthor />} path="/authors/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;
