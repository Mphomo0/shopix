import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

import { logout } from './authSlice' // Import the logout action

// NOTE: code here has changed to handle when our JWT and Cookie expire.
// We need to customize the baseQuery to be able to intercept any 401 responses
// and log the user out
// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-queries-with-basequery

// Define the baseQuery with the base URL
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
})

// Create a custom baseQueryWithAuth function to handle authentication and logout on 401 errors
async function baseQueryWithAuth(args, api, extra) {
  // Execute the baseQuery with provided arguments
  const result = await baseQuery(args, api, extra)
  // Check if the response contains an error with status code 401 (Unauthorized)
  if (result.error && result.error.status === 401) {
    // If a 401 error is detected, dispatch the logout action
    api.dispatch(logout())
  }
  // Return the result of the baseQuery
  return result
}

// Create the API slice with the customized baseQuery
export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth, // Use the customized baseQuery for API requests
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}), // Define your API endpoints here if needed
})
