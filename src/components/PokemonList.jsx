import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons, loadMore } from "../features/pokemonSlice";
import { Link } from "react-router-dom";
const URL = "https://pokeapi.co/api/v2/pokemon/";

const PokemonList = ({ gen }) => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, next } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemons(gen));
  }, [gen]);

  const renderPokemon = () => {
    return pokemons.map((p) => <PokemonListItem key={p.name} pokemon={p} />);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className='pokemon-list'>{renderPokemon()}</div>
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

  return (
    <div className='pokemon-list-item'>
      {loading ? (
        <>...Loading</>
      ) : (
        <>
          <Link to={`/pokedex/${pokemon.name}`} className='image-container'>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              name={pokemon.name}
            />
          </Link>
          <div># {pokemon.id}</div>
          <div>{pokemon.name}</div>
          <div className='types'>{renderTypes()}</div>
        </>
      )}
    </div>
  );
};

export default PokemonList;
