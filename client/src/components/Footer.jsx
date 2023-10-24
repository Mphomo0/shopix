import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../images/logo/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={2} className='mt-4 mb-4'>
              <img className='img-fluid' src={Logo} alt='logo' />
            </Col>
            <Col xs={12} sm={6} md={2} className='mt-4 mb-4'>
              <h5>PAGES</h5>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Promos</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={2} className='mt-4 mb-4'>
              <h5>Policy</h5>
              <ul>
                <li>Terms of Usage</li>
                <li>Privacy Policy</li>
                <li>Return Policy</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={2} className='mt-4 mb-4'>
              <h5>
                <strong>CATEGORIES</strong>
              </h5>
              <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Bath & Beauty</li>
                <li>Beauty Supplements</li>
              </ul>
            </Col>
            <Col xs={12} md={3} className='mt-4 mb-4'>
              <h5>
                <strong>SUBSCRIBE</strong>
              </h5>
              <p>Subscribe to our newsletter</p>
              <form>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                  />
                  <button type='submit' className='btn btn-primary btn-size'>
                    Submit
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col className='py-3'>
          <p className='text-center text-primary'>Copyright &copy; Shopix</p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
