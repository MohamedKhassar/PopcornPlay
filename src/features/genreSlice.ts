// src/redux/genreSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GenreType } from "../lib/types";

const initialState: {
  genres: GenreType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | undefined | string;
} = {
  genres: [],
  status: "idle",
  error: null,
};
export const fetchGenres = createAsyncThunk("genres/fetchGenres", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list",
    {
      params: {
        api_key: "eae7a031b92c3144dfadfc41445a781c",
      },
    }
  );
  return response.data.genres; // return the genres array
});

const genreSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.genres = action.payload; // populate genres
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default genreSlice.reducer;
