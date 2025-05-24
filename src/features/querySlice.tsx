// features/search/searchSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { VITE_APP_API_KEY } from "../lib/data";
import { SearchResultType } from "../lib/types";


export const fetchSearchResults = createAsyncThunk(
    "search/fetchResults",
    async (query: string) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/multi`, {
            params: {
                api_key: VITE_APP_API_KEY,
                query,
            },
        });
        return res.data.results;
    }
);
const initialState: { query: SearchResultType[], loading: boolean, error: string | null } = {
    query: [],
    loading: false,
    error: null as string | null,
}
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        clearSearch: (state) => {
            state.query = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.loading = false;
                state.query = action.payload;
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch";
            });
    },
});
export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
