import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pokemonsService from "./pokemonService";

const initialState = {
  pokemons: [],
  pokemon: {},
  message: "",
  next: "",
  isSuccess: false,
  isError: false,
  isLoading: true,
};

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetch",
  async (gen, thunkAPI) => {
    try {
      return await pokemonsService.fetchPokemons(gen);
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

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetch",
  async (pokemon, thunkAPI) => {
    try {
      return await pokemonsService.fetchPokemon(pokemon);
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

export const loadMore = createAsyncThunk(
  "more/fetch",
  async (next, thunkAPI) => {
    try {
      return await pokemonsService.loadMore(next);
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
    // reset: (state) => {
    //   console.log("reset");
    //   state = initialState;
    // },
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload.results;
        state.next = action.payload.next;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.message = action.payload.results;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(loadMore.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(loadMore.fulfilled, (state, action) => {
        state.pokemons = state.pokemons.concat(action.payload.results);
        state.next = action.payload.next;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(loadMore.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(fetchPokemon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.pokemon = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default pokemon.reducer;
export const { reset } = pokemon.actions;
