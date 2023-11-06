import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useLoginMutation } from '../slices/usersApiSlice'
import SearchBox from './SearchBox'
import { logout } from '../slices/authSlice'
import { resetCart } from '../slices/cartSlice'
import Logo from '../images/logo/logoWhite.png'
import { FaCartPlus, FaUser } from 'react-icons/fa'

const Header = () => {
  // Get cart items and user information from Redux store
  const { cartItems } = useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.auth)

  // Initialize the navigation hook and dispatch function
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Initialize the logout API mutation
  const [logoutApiCall] = useLoginMutation()

  // Function to handle user logout
  const logoutHandler = async () => {
    try {
      // Call the logout API and dispatch actions
      await logoutApiCall().unwrap()
      dispatch(logout())
      dispatch(resetCart())
      navigate('/login')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <header>
      <Navbar expand='lg' bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              {' '}
              <img className='img-fluid' src={Logo} alt='logo' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* Navigation Links */}
            <Nav className='ms-auto'>
              <SearchBox />
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaCartPlus />
                  &nbsp; Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                // Display user-related links and options when the user is logged in
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                // Display a login link when the user is not logged in
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser />
                    &nbsp;Login
                  </Nav.Link>
                </LinkContainer>
              )}
              {/* Admin Links - Display only for admin users */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
