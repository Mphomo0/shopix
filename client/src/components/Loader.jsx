import { Spinner } from 'react-bootstrap'

// Define a functional component called Loader
const Loader = () => {
  // Return a Spinner component with the following properties
  return (
    <Spinner
      animation='border' // Set the animation type to 'border'
      role='status' // Set the ARIA role to 'status'
      style={{
        width: '100px', // Set the width of the Spinner to 100 pixels
        height: '100px', // Set the height of the Spinner to 100 pixels
        margin: 'auto', // Center the Spinner horizontally using margin auto
        display: 'block', // Set the display property to 'block' to center the Spinner
      }}
    />
  )
}

// Export the Loader component as the default export
export default Loader
