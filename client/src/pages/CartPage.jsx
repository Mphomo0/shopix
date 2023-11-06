import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../slices/cartSlice'

// Define a functional component called CartPage
const CartPage = () => {
  // Access the router's navigate function
  const navigate = useNavigate()

  // Access the Redux dispatch function
  const dispatch = useDispatch()

  // Access the cart state from the Redux store
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  // Function to add an item to the cart
  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  // Function to remove an item from the cart
  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id))
  }

  // Function to handle checkout and navigate to the login page
  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          // Display a message if the cart is empty with a link to go back to the main page
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          // Display the list of cart items if the cart is not empty
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              // Map through each cart item and display it
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    {/* Display the product image */}
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    {/* Display a link to the product details page */}
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>R {item.price}</Col>
                  <Col md={2}>
                    {/* Dropdown to select the quantity of the item */}
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    {/* Button to remove the item from the cart */}
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              {/* Display the subtotal and total number of items in the cart */}
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                Items
              </h2>
              R{/* Calculate and display the total price */}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              {/* Button to proceed to checkout with conditional disabling */}
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartPage
