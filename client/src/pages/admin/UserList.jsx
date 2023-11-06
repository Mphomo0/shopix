import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from '../../slices/usersApiSlice'
import { toast } from 'react-toastify'

const UserList = () => {
  // Fetch a list of users from the API using useGetUsersQuery
  const { data: users, refetch, isLoading, error } = useGetUsersQuery()

  // Use the useDeleteUserMutation to delete a user
  const [deleteUser] = useDeleteUserMutation()

  // Function to handle user deletion
  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure')) {
      try {
        // Delete the user using the deleteUser mutation
        await deleteUser(id)
        // Display a success message and refresh the user list
        toast.success('User Deleted')
        refetch()
      } catch (err) {
        // Display an error message if deletion fails
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  return (
    <>
      <h1>Users</h1>
      {isLoading ? (
        // Display a loading spinner while data is being fetched
        <Loader />
      ) : error ? (
        // Display an error message if there's an error fetching data
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        // Display the user data in a table if there are no errors
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              // Map through the list of users and display each user in a row
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  {/* Display the user's email as a mailto link */}
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    // Display a green checkmark icon if the user is an admin
                    <FaCheck style={{ color: 'green' }} />
                  ) : (
                    // Display a red "X" icon if the user is not an admin
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  {!user.isAdmin && (
                    // If the user is not an admin, display edit and delete buttons
                    <>
                      <LinkContainer
                        // Create a link to edit the user's details
                        to={`/admin/user/${user._id}/edit`}
                        style={{ marginRight: '10px' }}
                      >
                        <Button variant='light' className='btn-sm'>
                          <FaEdit />
                        </Button>
                      </LinkContainer>
                      <Button
                        // Button to delete the user
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(user._id)}
                      >
                        <FaTrash style={{ color: 'white' }} />
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserList
