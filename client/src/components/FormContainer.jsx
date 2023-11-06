import { Container, Row, Col } from 'react-bootstrap'

// FormContainer is a reusable component for rendering forms within a centered container.
const FormContainer = ({ children }) => {
  return (
    <Container>
      {/* Create a row and center its contents in medium-sized screens */}
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {/* Render the children, which are typically form components */}
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
