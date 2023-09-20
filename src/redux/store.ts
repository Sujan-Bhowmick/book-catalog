import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./features/Books/bookApi";
import bookReducer from './features/Books/bookSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch