import { Alert } from 'react-bootstrap'

// Define a functional component called Message that takes two props: variant and children
const Message = ({ variant, children }) => {
  // Return an Alert component with the specified variant prop and the content passed as children
  return <Alert variant={variant}>{children}</Alert>

  // Set default prop values for the Message component (Note: This part should be outside the component function)
  Message.defaultProps = {
    variant: 'info', // Set the default value for the variant prop to 'info'
  }
}

// Export the Message component as the default export
export default Message
