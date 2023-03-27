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
    // console.log(isLoading);
    dispatch(fetchPokemon(id));
  }, []);

  const renderStats = () => {
    return pokemon.stats.map((s) => {
      return (
        <div className='stat' key={s.stat.name}>
          <div className='stat-name'>{s.stat.name}</div>
          <div className='stat-data'>{s.base_stat}</div>
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

  return (
    <div className='pokemon'>
      {!isSuccess ? (
        <>Loading...</>
      ) : (
        <>
          <div className='pokemon-name'>
            {pokemon.name} #{pokemon.id}
          </div>
          <div className='image-and-stats' style={{ display: "flex" }}>
            <div className='pokemon-image'>
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                name={pokemon.name}
                alt={pokemon.name}
              />
            </div>
            <div>
              <div className='stats'>{renderStats()}</div>
              <div>Type</div>
              <div className='types'>{renderTypes()}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokemon;
