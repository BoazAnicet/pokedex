import { useState } from "react";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [gen, setGen] = useState(1);

  const changeGen = (gen) => {
    setGen(gen);
  };

  return (
    <div className='pokedex'>
      <div className='gen-list'>
        <ul>
          <li>
            <button onClick={() => changeGen(1)}>I</button>
          </li>
          <li>
            <button onClick={() => changeGen(2)}>II</button>
          </li>
          <li>
            <button onClick={() => changeGen(3)}>III</button>
          </li>
          <li>
            <button onClick={() => changeGen(4)}>IV</button>
          </li>
          <li>
            <button onClick={() => changeGen(5)}>V</button>
          </li>
          <li>
            <button onClick={() => changeGen(6)}>VI</button>
          </li>
          <li>
            <button onClick={() => changeGen(7)}>VII</button>
          </li>
          <li>
            <button onClick={() => changeGen(8)}>VIII</button>
          </li>
          <li>
            <button onClick={() => changeGen(9)}>IX</button>
          </li>
        </ul>
      </div>
      <PokemonList gen={gen} />
    </div>
  );
};

export default Pokedex;
