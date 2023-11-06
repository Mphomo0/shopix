import mongoose from 'mongoose'

// Define the review schema
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    // Reference to the user who wrote the review
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    // Enable timestamps (createdAt and updatedAt) for reviews
    timestamps: true,
  }
)

// Define the product schema
const productSchema = mongoose.Schema(
  {
    // Reference to the user who created the product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // Array of reviews associated with the product
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    // Enable timestamps (createdAt and updatedAt) for products
    timestamps: true,
  }
)

// Create the Product model
const Product = mongoose.model('Product', productSchema)

export default Product
