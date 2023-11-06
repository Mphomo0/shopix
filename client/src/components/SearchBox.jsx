import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Define a functional component called SearchBox
const SearchBox = () => {
  const navigate = useNavigate()
  const { keyword: urlKeyword } = useParams()

  // Create a controlled input using the useState hook and set the initial value to urlKeyword
  const [keyword, setKeyword] = useState(urlKeyword || '')

  // Define a submitHandler function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword) {
      // Navigate to the search page with the keyword as a URL parameter
      navigate(`/search/${keyword.trim()}`)
      // Clear the input field by setting its value to an empty string
      setKeyword('')
    } else {
      // If the input is empty, navigate to the homepage
      navigate('/')
    }
  }

  // Return a form component with an input field and a submit button
  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)} // Update the 'keyword' state as the input value changes
        value={keyword} // Set the value of the input to the 'keyword' state
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2 mx-2'>
        Search
      </Button>
    </Form>
  )
}

// Export the SearchBox component as the default export
export default SearchBox
