import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FaCartPlus, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <Navbar expand='lg' bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Shopix</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <NavDropdown
                title='Search by Category'
                id='navbarScrollingDropdown'
              >
                <LinkContainer to='/women'>
                  <div>
                    <NavDropdown.Item>Women</NavDropdown.Item>
                  </div>
                </LinkContainer>
                <LinkContainer to='/men'>
                  <div>
                    <NavDropdown.Item>Men</NavDropdown.Item>
                  </div>
                </LinkContainer>
                <LinkContainer to='/kids'>
                  <div>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='/kids'>Kids</NavDropdown.Item>
                  </div>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/new-arrivals'>
                <Nav.Link>New Arrivals</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/collection'>
                <Nav.Link>Collection</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaCartPlus />
                  &nbsp; Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FaUser />
                  &nbsp;Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
