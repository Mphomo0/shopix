import mongoose from 'mongoose'

// Define the order schema
const orderSchema = mongoose.Schema(
  {
    // User who placed the order
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    // List of items in the order
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    // Shipping address details
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    // Chosen payment method
    paymentMethod: {
      type: String,
      required: true,
    },
    // Payment result details
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    // Calculated item price
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // Calculated tax amount
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // Shipping cost
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // Total order price
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // Payment status
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    // Date and time when the payment was made
    paidAt: {
      type: Date,
    },
    // Delivery status
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    // Date and time when the order was delivered
    deliveredAt: {
      type: Date,
    },
  },
  {
    // Enable timestamps (createdAt and updatedAt)
    timestamps: true,
  }
)

// Create the Order model
const Order = mongoose.model('Order', orderSchema)

export default Order
