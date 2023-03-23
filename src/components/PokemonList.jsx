import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons, loadMore } from "../features/pokemonSlice";
import { Link } from "react-router-dom";
const URL = "https://pokeapi.co/api/v2/pokemon/";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, next } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const renderPokemon = () => {
    return pokemons.map((p) => <PokemonListItem key={p.name} pokemon={p} />);
  };

  const load = () => {
    console.log(next);
    dispatch(loadMore(next));
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className='pokemon-list'>{renderPokemon()}</div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <button onClick={() => load()}>Load More</button>
      </div>
    </div>
  );
};

export const PokemonListItem = (props) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const pokemonData = await axios
      .get(props.pokemon.url)
      .then((res) => res.data);
    setPokemon(pokemonData);
    setLoading(false);
  };

  const renderTypes = () => {
    return pokemon.types.map((t) => (
      <div key={t.type.name} className={`type ${t.type.name}`}>
        {t.type.name}
      </div>
    ));
  };

  if (loading) return "Loading...";

  return (
    <div className='pokemon-list-item'>
      <Link to={`/pokedex/${pokemon.name}`} className='image-container'>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          // src={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
        />
      </Link>
      <div># {pokemon.id}</div>
      <div>{pokemon.name}</div>
      <div className='types'>{renderTypes()}</div>
    </div>
  );
};

export default PokemonList;
