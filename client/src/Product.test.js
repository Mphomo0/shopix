import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Product from './components/Product'

// Mock product data for testing
const sample = {
  _id: '1',
  name: 'Sample Product',
  image: 'sample-image.jpg',
  rating: 4.5,
  numReviews: 10,
  price: 99.99,
}

test('Product component renders correctly', () => {
  render(
    <Router>
      <Product product={sample} />
    </Router>
  )

  // Verify that product name, price, and review text are displayed
  const productName = screen.getByText('Sample Product')
  const productPrice = screen.getByText('R99.99')
  const productReviews = screen.getByText('10 reviews')

  // Ensure all elements are present in the rendered component
  expect(productName).toBeInTheDocument()
  expect(productPrice).toBeInTheDocument()
  expect(productReviews).toBeInTheDocument()

  // Create a snapshot of the rendered component
  expect(screen).toMatchSnapshot()
})
