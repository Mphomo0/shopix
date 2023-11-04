import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'

const Homepage = () => {
  // Fetch products
  const { data: products, isLoading, error } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error.data.message || error.error}</Message>
      ) : Array.isArray(products) ? ( // Check if products is an array
        <>
          <h1>Latest products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={3}>
                <Product key={product._id} product={product} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <p>No products available.</p>
      )}
    </>
  )
}

export default Homepage
