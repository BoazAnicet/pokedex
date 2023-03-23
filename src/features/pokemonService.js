import axios from "axios";
const URL = "https://pokeapi.co/api/v2/pokemon/?limit=12";

const fetchPokemons = async () => {
  try {
    const resonse = axios.get(URL).then((res) => res.data);
    return resonse;
  } catch (error) {
    return error;
  }
};

const fetchPokemon = async (pokemon) => {
  try {
    const resonse = axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.data);
    return resonse;
  } catch (error) {
    return error;
  }
};

const loadMore = async (next) => {
  try {
    const resonse = axios.get(next).then((res) => res.data);
    return resonse;
  } catch (error) {
    return error;
  }
};

const pokemonsService = {
  fetchPokemons,
  fetchPokemon,
  loadMore,
};

export default pokemonsService;
