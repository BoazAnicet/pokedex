import axios from "axios";
const URL = "https://pokeapi.co/api/v2/pokemon/?limit=12";

const fetchPokemons = async () => {
  try {
    const resonse = axios.get(URL).then((res) => res.data.results);
    return resonse;
  } catch (error) {
    return error;
  }
};

const pokemonsService = {
  fetchPokemons,
};

export default pokemonsService;
