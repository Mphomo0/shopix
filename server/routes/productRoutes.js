import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productContoller.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import checkObjectId from '../middleware/checkObjectId.js'

// Get all products or create a new product (admin only)
router
  .route('/')
  .get(getProducts) // Get all products
  .post(protect, admin, createProduct) // Create a new product (admin only)

// Get top-rated products
router.get('/top', getTopProducts)

// Get a product by ID, update a product (admin only), or delete a product (admin only)
router
  .route('/:id')
  .get(checkObjectId, getProductById) // Get a product by ID
  .put(protect, admin, checkObjectId, updateProduct) // Update a product (admin only)
  .delete(protect, admin, deleteProduct) // Delete a product (admin only)

// Create a product review for a product
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview)

export default router
