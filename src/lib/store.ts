import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menuSlice';
import genreSlice from '../features/genreSlice';
import movieSlice from '../features/movieSlice.tsx';
import seriesSlice from '../features/SeriesSlice.tsx';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    genres:genreSlice,
    movies:movieSlice,
    series:seriesSlice
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
