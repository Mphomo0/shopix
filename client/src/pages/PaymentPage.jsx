import { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../slices/cartSlice'

const PaymentPage = () => {
  // Get the navigation function and cart information from the Redux store
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  // Redirect to the shipping page if no shipping address is provided
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping')
    }
  }, [navigate, shippingAddress])

  // Initialize the payment method state with a default value
  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  // Get the Redux dispatch function
  const dispatch = useDispatch()

  // Handle the form submission
  const submitHandler = (e) => {
    e.preventDefault()

    // Dispatch the selected payment method to the Redux store
    dispatch(savePaymentMethod(paymentMethod))

    // Navigate to the place order page
    navigate('/placeorder')
  }

  return (
    <FormContainer>
      {/* Display checkout steps component */}
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              className='my-2'
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentPage
