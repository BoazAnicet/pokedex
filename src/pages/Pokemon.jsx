import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPokemon, reset } from "../features/pokemonSlice";

const Pokemon = () => {
  const dispatch = useDispatch();
  const { pokemon, isLoading, isSuccess } = useSelector(
    (state) => state.pokemon
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(reset());
    console.log(isLoading);
    dispatch(fetchPokemon(id));
  }, []);

  const renderStats = () => {
    return pokemon.stats.map((s) => {
      return (
        <div className='stat' key={s.stat.name}>
          <div>{s.stat.name}</div>
          <div>{s.base_stat}</div>
        </div>
      );
    });
  };

  const renderTypes = () => {
    return pokemon.types.map((t) => (
      <div key={t.type.name} className={`type ${t.type.name}`}>
        {t.type.name}
      </div>
    ));
  };

  console.log("Is Loading", isLoading);

  if (!isSuccess) return "Loading...";
  // if (isLoading) return "Loading...";

  return (
    <div className='pokemon'>
      <div>
        {pokemon.name} #{pokemon.id}
      </div>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        name={pokemon.name}
      />
      <div className='stats'>{renderStats()}</div>
      <div className='types'>{renderTypes()}</div>
    </div>
  );
};

export default Pokemon;
