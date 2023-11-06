import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header /> {/* Render the Header component at the top of the page */}
      <main className='py-3'>
        <Container>
          <Outlet /> {/* Render the child route components using the Outlet */}
        </Container>
      </main>
      <Footer /> {/* Render the Footer component at the bottom of the page */}
      <ToastContainer />{' '}
      {/* Display toasts using the ToastContainer component */}
    </>
  )
}

export default App
