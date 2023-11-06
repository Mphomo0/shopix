import { apiSlice } from './apiSlice'
import { ORDERS_URL, PAYPAL_URL } from '../constants'

// Inject endpoints into the orderApiSlice
export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation to create an order
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL, // Define the URL for creating an order
        method: 'POST', // Specify the HTTP method as POST
        body: order, // Include the order data in the request body
      }),
    }),
    // Query to get order details by ID
    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`, // Construct the URL for getting order details
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
    }),
    // Mutation to pay for an order
    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`, // Construct the URL for paying an order
        method: 'PUT', // Specify the HTTP method as PUT
        body: details, // Include payment details in the request body
      }),
    }),
    // Query to get the PayPal client ID
    getPaypalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL, // Define the URL for getting the PayPal client ID
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
    }),
    // Query to get the user's orders
    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/mine`, // Construct the URL for getting the user's orders
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
    }),
    // Query to get all orders
    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL, // Define the URL for getting all orders
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
    }),
    // Mutation to mark an order as delivered
    deliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`, // Construct the URL for delivering an order
        method: 'PUT', // Specify the HTTP method as PUT
      }),
    }),
  }),
})

// Export the generated hooks for API operations
export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
} = orderApiSlice
