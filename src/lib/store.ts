import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menuSlice';
import genreSlice from '../features/genreSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    genres:genreSlice
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
