import { PRODUCTS_URL, UPLOAD_URL } from '../constants'
import { apiSlice } from './apiSlice'

// Inject endpoints into the productsApiSlice
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Query to get a list of products
    getProducts: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: `${PRODUCTS_URL}`, // Define the URL for getting products
        params: { keyword, pageNumber }, // Include query parameters in the request
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
      providesTags: ['Products'], // Provide tags for caching
    }),
    // Query to get product details by ID
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`, // Construct the URL for getting product details
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
    }),
    // Mutation to create a product
    createProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}`, // Define the URL for creating a product
        method: 'POST', // Specify the HTTP method as POST
      }),
      invalidatesTags: ['Product'], // Define tags to invalidate after the mutation
    }),
    // Mutation to update a product
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`, // Construct the URL for updating a product
        method: 'PUT', // Specify the HTTP method as PUT
        body: data, // Include the updated data in the request body
      }),
      providesTags: ['Products'], // Provide tags for caching
      invalidatesTags: ['Products'], // Define tags to invalidate after the mutation
    }),
    // Mutation to upload a product image
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`, // Define the URL for uploading a product image
        method: 'POST', // Specify the HTTP method as POST
        body: data, // Include the image data in the request body
      }),
    }),
    // Mutation to delete a product
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`, // Construct the URL for deleting a product
        method: 'DELETE', // Specify the HTTP method as DELETE
      }),
      providesTags: ['Product'], // Provide tags for caching
    }),
    // Mutation to create a product review
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`, // Construct the URL for creating a review
        method: 'POST', // Specify the HTTP method as POST
        body: data, // Include the review data in the request body
      }),
      invalidatesTags: ['Product'], // Define tags to invalidate after the mutation
    }),
    // Query to get top-rated products
    getTopProducts: builder.query({
      query: () => `${PRODUCTS_URL}/top`, // Define the URL for getting top-rated products
      keepUnusedDataFor: 5, // Define data retention policy for unused data
    }),
  }),
})

// Export the generated hooks for API operations
export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} = productsApiSlice
