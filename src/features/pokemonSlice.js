import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pokemonsService from "./pokemonService";

const initialState = {
  pokemons: [],
  pokemon: {},
  message: "",
  isSuccess: false,
  isError: false,
  isLoading: true,
};

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetch",
  async (_, thunkAPI) => {
    try {
      return await pokemonsService.fetchPokemons();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const pokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default pokemon.reducer;
export const { reset } = pokemon.actions;
