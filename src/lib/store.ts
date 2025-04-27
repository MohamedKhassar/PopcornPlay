import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menuSlice';
import genreSlice from '../features/genreSlice';
import movieSlice from '../features/movieSlice.tsx';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    genres:genreSlice,
    movies:movieSlice
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
