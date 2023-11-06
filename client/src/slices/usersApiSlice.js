import { USERS_URL } from '../constants'
import { apiSlice } from './apiSlice'

// Inject endpoints into the usersApiSlice
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation to log in a user
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`, // Define the URL for user login
        method: 'POST', // Specify the HTTP method as POST
        body: data, // Include user login data in the request body
      }),
    }),
    // Mutation to register a new user
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/`, // Define the URL for user registration
        method: 'POST', // Specify the HTTP method as POST
        body: data, // Include user registration data in the request body
      }),
    }),
    // Mutation to log out a user
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`, // Define the URL for user logout
        method: 'POST', // Specify the HTTP method as POST
      }),
    }),
    // Mutation to update user profile
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`, // Define the URL for updating user profile
        method: 'PUT', // Specify the HTTP method as PUT
        body: data, // Include updated user profile data in the request body
      }),
    }),
    // Query to get a list of users
    getUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}`, // Define the URL for getting a list of users
      }),
      providesTags: ['User'], // Provide tags for caching
      keepUnusedDataFor: 5, // Define data retention policy for unused data
    }),
    // Mutation to delete a user
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`, // Define the URL for deleting a user
        method: 'DELETE', // Specify the HTTP method as DELETE
      }),
    }),
    // Query to get user details by ID
    getUserDetails: builder.query({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`, // Define the URL for getting user details by ID
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
    }),
    // Mutation to update user data
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`, // Define the URL for updating user data
        method: 'PUT', // Specify the HTTP method as PUT
        body: data, // Include the updated user data in the request body
      }),
      invalidatesTags: ['User'], // Define tags to invalidate after the mutation
    }),
  }),
})

// Export the generated hooks for API operations
export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} = usersApiSlice
