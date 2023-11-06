import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import cartSliceReducer from './slices/cartSlice'
import authSliceReducer from './slices/authSlice'

// Configure the Redux store
const store = configureStore({
  // Define reducers for different parts of the state
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // API slice reducer
    cart: cartSliceReducer, // Cart slice reducer
    auth: authSliceReducer, // Auth slice reducer
  },
  // Middleware configuration to handle API calls
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, // Enable Redux DevTools for debugging
})

export default store
