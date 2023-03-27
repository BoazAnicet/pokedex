import axios from "axios";

const fetchPokemons = async (gen) => {
  let offset = 0;
  let limit = 151;

  switch (gen) {
    case 1:
      offset = 0;
      limit = 151;
      break;
    case 2:
      offset = 151;
      limit = 100;
      break;
    case 3:
      offset = 251;
      limit = 135;
      break;
    case 4:
      offset = 386;
      limit = 107;
      break;
    case 5:
      offset = 494;
      limit = 156;
      break;
    case 6:
      offset = 649;
      limit = 72;
      break;
    case 7:
      offset = 721;
      limit = 88;
      break;
    case 8:
      offset = 809;
      limit = 96;
      break;
    case 9:
      offset = 905;
      limit = 110;
      break;
    default:
      break;
  }

  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

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
