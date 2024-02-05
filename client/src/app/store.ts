import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import userSlice from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, // process.env.NODE_ENV !== 'production',
})
