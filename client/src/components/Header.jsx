import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useLoginMutation } from '../slices/usersApiSlice'
import SearchBox from './SearchBox'
import { logout } from '../slices/authSlice'
import { FaCartPlus, FaUser } from 'react-icons/fa'

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [logoutApiCall] = useLoginMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
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
            <Navbar.Brand>Shopix</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Nav>
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
            </Nav> */}

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
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser />
                    &nbsp;Login
                  </Nav.Link>
                </LinkContainer>
              )}
              {/* Admin Links */}
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
