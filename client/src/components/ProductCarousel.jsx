import { Carousel, Image } from 'react-bootstrap'
import Banner1 from '../images/Banner1.png'
import Banner2 from '../images/Banner2.png'

const ProductCarousel = () => {
  return (
    <>
      <Carousel className='mb-4'>
        <Carousel.Item>
          <Image className='d-block w-100' src={Banner1} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <Image className='d-block w-100' src={Banner2} alt='First slide' />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ProductCarousel
