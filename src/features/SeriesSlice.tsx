import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieType } from "../lib/types";
import { VITE_APP_API_KEY } from "../lib/data";

const initialState: {
    series: {
        popularSeries: MovieType[], topRatedSeries: MovieType[], onTheAir: MovieType[]
    };
    status: "idle" | "loading" | "succeeded" | "failed";
    error: null | undefined | string;
} = {
    series: { popularSeries: [], topRatedSeries: [], onTheAir: [] }
    ,
    status: "idle",
    error: null,
};

export const fetchPopularSeries = createAsyncThunk("series/fetchPopularSeries", async () => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular",
        {
            params: {
                api_key: VITE_APP_API_KEY,
            },
        }
    );
    return response.data.results; // return the movies array
});
export const fetchTopRatedSeries = createAsyncThunk("series/fetchTopRatedSeries", async () => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated",
        {
            params: {
                api_key: VITE_APP_API_KEY,
            },
        }
    );
    return response.data.results; // return the movies array
});
export const fetchOnTheAirSeries = createAsyncThunk("series/fetchOnTheAirSeries", async () => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/tv/on_the_air",
        {
            params: {
                api_key: VITE_APP_API_KEY,
            },
        }
    );
    return response.data.results; // return the movies array
});
const seriesSlice = createSlice({
    name: "series",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularSeries.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPopularSeries.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.series.popularSeries = action.payload;
            })
            .addCase(fetchPopularSeries.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchTopRatedSeries.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTopRatedSeries.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.series.topRatedSeries = action.payload; // populate movies
            })
            .addCase(fetchTopRatedSeries.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchOnTheAirSeries.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchOnTheAirSeries.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.series.onTheAir = action.payload; // populate movies
            })
            .addCase(fetchOnTheAirSeries.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    },
});

export default seriesSlice.reducer;
