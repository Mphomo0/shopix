import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// Register a new user or get the list of users (admin)
router.route('/').post(registerUser).get(protect, admin, getUsers)

// Log out the user
router.post('/logout', logoutUser)

// Log in a user
router.post('/login', authUser)

// Get user profile or update it
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

// Delete a user, get a user by ID, or update a user's information (admin)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router
