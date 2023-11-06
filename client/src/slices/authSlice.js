import { createSlice } from '@reduxjs/toolkit'

// Define the initial state for the auth slice
const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
}

// Create the authSlice using createSlice
const authSlice = createSlice({
  name: 'auth', // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer function to set user credentials
    setCredentials: (state, action) => {
      // Update the userInfo in the state with the payload
      state.userInfo = action.payload
      // Store the userInfo in localStorage for persistence
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    // Reducer function to log out the user
    logout: (state, action) => {
      // Clear the userInfo from the state
      state.userInfo = null
      // Clear the entire localStorage, including cart and shipping info
      localStorage.clear()
    },
  },
})

// Export the action creators generated by createSlice
export const { setCredentials, logout } = authSlice.actions

// Export the auth reducer
export default authSlice.reducer
