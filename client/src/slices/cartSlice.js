import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartUtils'

// Define the initial state for the cart slice
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' }

// Create the CartSlice using createSlice
const CartSlice = createSlice({
  name: 'cart', // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer function to add an item to the cart
    addToCart: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x._id === item._id)
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        )
      } else {
        state.cartItems = [...state.cartItems, item]
      }

      // Update the cart and return the updated state
      return updateCart(state)
    },
    // Reducer function to remove an item from the cart
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload)

      // Update the cart and return the updated state
      return updateCart(state)
    },
    // Reducer function to save the shipping address
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload
      // Store the cart state in localStorage
      localStorage.setItem('cart', JSON.stringify(state))
    },
    // Reducer function to save the payment method
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
      // Store the cart state in localStorage
      localStorage.setItem('cart', JSON.stringify(state))
    },
    // Reducer function to clear the cart items
    clearCartItems: (state, action) => {
      state.cartItems = []
      // Update the cart and return the updated state
      return updateCart(state)
    },
    // Reducer function to reset the cart to the initial state
    resetCart: (state) => (state = initialState),
  },
})

// Export the action creators generated by createSlice
export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  resetCart,
} = CartSlice.actions

// Export the cart reducer
export default CartSlice.reducer
