// src/redux/movieSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CastMember, MovieType } from "../lib/types";
import { VITE_APP_API_KEY } from "../lib/data";

const initialState: {
  movies: {
    popularMovies: MovieType[], topRated: MovieType[], nowPlaying: MovieType[],
    upcoming: MovieType[],
    movieDetails: { details: MovieType, cast: CastMember[] }
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | undefined | string;
} = {
  movies: { popularMovies: [], topRated: [], nowPlaying: [], upcoming: [], movieDetails: { details: {} as MovieType, cast: [] as CastMember[] } }
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

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id: string) => {
    try {
      const [detailsResponse, creditsResponse] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: VITE_APP_API_KEY,
            language: "en-US",
          },
        }),
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
          params: {
            api_key: VITE_APP_API_KEY,
            language: "en-US",
          },
        }),
      ]);

      return {
        details: detailsResponse.data,
        cast: creditsResponse.data.cast.slice(0, 10), // top 10 cast members
      };
    } catch (error) {
      console.error("Error fetching movie details and cast:", error);
      throw error;
    }
  }
);

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
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies.movieDetails = action.payload; // populate movies
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export default movieSlice.reducer;
