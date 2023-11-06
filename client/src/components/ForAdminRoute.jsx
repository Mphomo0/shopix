import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ForAdminRoute = () => {
  // Retrieve the user information from the Redux store
  const { userInfo } = useSelector((state) => state.auth)

  // Check if the user is authenticated and is an admin
  return userInfo && userInfo.isAdmin ? (
    // If the user is an admin, render the nested routes using Outlet
    <Outlet />
  ) : (
    // If the user is not an admin, navigate to the login page with replace option
    <Navigate to='/login' replace />
  )
}

export default ForAdminRoute
