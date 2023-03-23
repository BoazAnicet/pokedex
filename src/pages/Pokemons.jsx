import { useState } from "react";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} />
        </form>
      </div>
      <PokemonList />
    </div>
  );
};

export default Pokedex;
