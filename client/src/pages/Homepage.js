import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'

const HomePage = () => {
  // Get the 'pageNumber' and 'keyword' from the URL parameters using 'useParams'
  const { pageNumber, keyword } = useParams()

  // Fetch product data based on the 'pageNumber' and 'keyword' using 'useGetProductsQuery'
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  })

  return (
    <>
      {!keyword ? (
        // If there's no keyword in the URL, display a product carousel
        <ProductCarousel />
      ) : (
        // If there's a keyword in the URL, provide a link to go back to the homepage
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        // If data is still loading, display a loader
        <Loader />
      ) : error ? (
        // If there's an error, display an error message
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        // If data is loaded successfully, display the list of products and pagination
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomePage
