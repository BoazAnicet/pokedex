import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../features/pokemonSlice";

export const store = configureStore({
  reducer: { pokemon: pokemonSlice },
});
