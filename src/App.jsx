import "./App.css";
import { Route, Routes } from "react-router";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:id' element={<Pokemon />} />
      </Routes>
    </div>
  );
};

export default App;
