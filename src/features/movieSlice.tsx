// src/redux/movieSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieType } from "../lib/types";
import { VITE_APP_API_KEY } from "../lib/data";

const initialState: {
  movies: {
    popularMovies: MovieType[], topRated: MovieType[], nowPlaying: MovieType[],
    upcoming: MovieType[]
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | undefined | string;
} = {
  movies: { popularMovies: [], topRated: [], nowPlaying: [], upcoming: [] }
  ,
  status: "idle",
  error: null,
};
export const fetchUpcomingMovies = createAsyncThunk("movies/fetchUpcomingMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/upcoming",
    {
      params: {
        api_key: VITE_APP_API_KEY,
      },
    }
  );
  return response.data.results; // return the movies array
});
export const fetchNowPlayingMovies = createAsyncThunk("movies/fetchNowPlayingMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    {
      params: {
        api_key: VITE_APP_API_KEY,
      },
    }
  );
  return response.data.results; // return the movies array
});
export const fetchPopularMovies = createAsyncThunk("movies/fetchPopularMovies", async () => {
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
export const fetchTopRatedMovies = createAsyncThunk("movies/fetchTopRatedMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated",
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
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies.popularMovies = action.payload; // populate movies
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchNowPlayingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies.nowPlaying = action.payload; // populate movies
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies.upcoming = action.payload; // populate movies
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies.topRated = action.payload; // populate movies
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export default movieSlice.reducer;
