import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menuSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
