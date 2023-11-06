import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  useDeliverOrderMutation,
  useGetOrderDetailsQuery,
  useGetPaypalClientIdQuery,
  usePayOrderMutation,
} from '../slices/ordersApiSlice'

const OrderPage = () => {
  // Get the order ID from the URL parameters
  const { id: orderId } = useParams()

  // Fetch order details using 'useGetOrderDetailsQuery'
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId)

  // Initialize mutations for paying and delivering orders
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation()
  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation()

  // Get user information from the Redux store
  const { userInfo } = useSelector((state) => state.auth)

  // Manage PayPal script loading and configuration
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer()
  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery()

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': paypal.clientId,
            currency: 'USD',
          },
        })
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' })
      }
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPaypalScript()
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch])

  // Handle the PayPal payment approval process
  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details }).unwrap()
        refetch()
        toast.success('Order is paid')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    })
  }

  // Handle PayPal payment error
  function onError(err) {
    toast.error(err.message)
  }

  // Create an order for PayPal payment
  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID
      })
  }

  // Handle order delivery
  const deliverHandler = async () => {
    await deliverOrder(orderId)
    refetch()
  }

  return isLoading ? (
    // Display a loader while data is loading
    <Loader />
  ) : error ? (
    // Display an error message if there's an error
    <Message variant='danger'>{error?.data?.message}</Message>
  ) : (
    // Display order details if data is successfully loaded
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              {/* Display shipping information */}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              {/* Display payment method and payment status */}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {/* Display order items */}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
                {/* Display order summary */}
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  {/* Display item details, shipping, tax, and total price */}
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {/* Display PayPal payment button if the order is not paid */}
                </ListGroup.Item>
              )}

              {loadingDeliver && <Loader />}

              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    {/* Display the "Mark As Delivered" button for admins */}
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderPage
