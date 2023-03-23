import "./App.css";
import { Route, Routes } from "react-router";
import Pokemons from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/pokedex' element={<Pokemons />} />
        <Route path='/pokedex/search' element={<Search />} />
        <Route path='/pokedex/:id' element={<Pokemon />} />
      </Routes>
    </div>
  );
};

export default App;
