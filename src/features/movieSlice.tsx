// src/redux/movieSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieType } from "../lib/types";
import { VITE_APP_API_KEY } from "../lib/data";

const initialState: {
  movies: MovieType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | undefined | string;
} = {
  movies: [],
  status: "idle",
  error: null,
};
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US",
    {
      params: {
        api_key: VITE_APP_API_KEY,
      },
    }
  );
  return response.data.results; // return the movies array
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload; // populate movies
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
