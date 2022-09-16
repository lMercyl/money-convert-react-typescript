import { configureStore } from '@reduxjs/toolkit';
import convert from './convert/slice';
import curencies from "./curencies/slice";

export const store = configureStore({
  reducer: {
    convert,
    curencies
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch