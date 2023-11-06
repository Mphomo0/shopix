import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from '../../slices/usersApiSlice'

// Define a functional component called UserEditScreen
const UserEditScreen = () => {
  // Extract the "id" parameter from the route URL
  const { id: userId } = useParams()

  // Define state variables for user details
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  // Fetch user details using the "useGetUserDetailsQuery" hook
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useGetUserDetailsQuery(userId)

  // Use the "useUpdateUserMutation" hook to update user details
  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation()

  // Access the router's navigate function
  const navigate = useNavigate()

  // Function to handle form submission and update the user
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      // Update the user using the "updateUser" mutation
      await updateUser({ userId, name, email, isAdmin })
      // Display a success message, refresh user data, and navigate back to the user list
      toast.success('User updated successfully')
      refetch()
      navigate('/admin/userlist')
    } catch (err) {
      // Display an error message if the update fails
      toast.error(err?.data?.message || err.error)
    }
  }

  // Set the initial form values when user data is available
  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      setIsAdmin(user.isAdmin)
    }
  }, [user])

  return (
    <>
      {/* Button to navigate back to the user list */}
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          // Display a loading spinner while user data is being fetched
          <Loader />
        ) : error ? (
          // Display an error message if there's an error fetching user data
          <Message variant='danger'>
            {error?.data?.message || error.error}
          </Message>
        ) : (
          // Display the user edit form if there are no errors
          <Form onSubmit={submitHandler}>
            {/* Form input for user's name */}
            <Form.Group className='my-2' controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Form input for user's email address */}
            <Form.Group className='my-2' controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Checkbox for setting user as admin */}
            <Form.Group className='my-2' controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            {/* Submit button to update user details */}
            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditScreen
