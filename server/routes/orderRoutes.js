import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// Create a new order or get all orders (admin only)
router
  .route('/')
  .post(protect, addOrderItems) // Create a new order (authenticated user)
  .get(protect, admin, getOrders) // Get all orders (admin only)

// Get the orders of the currently logged-in user
router.route('/mine').get(protect, getMyOrders)

// Get an order by ID, update order to paid, and update order to delivered
router
  .route('/:id')
  .get(protect, getOrderById) // Get an order by ID (authenticated user)
  .put(protect, updateOrderToPaid) // Update order to paid (authenticated user)
  .put(protect, admin, updateOrderToDelivered) // Update order to delivered (admin only)

export default router
