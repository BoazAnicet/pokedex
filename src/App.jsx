import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router";
import Pokemons from "./pages/Pokemons";

const App = () => {
  const [loading, setSetloading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.data);
    setData(response);
    setSetloading(false);
  };

  // if (loading) return <div>Loading...</div>;

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/pokemon' element={<Pokemons />} />
      </Routes>
    </div>
  );
};

export default App;
