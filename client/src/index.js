import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { Provider } from 'react-redux'
import store from './store'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import './index.css'
import App from './App'
import PrivateRoute from './components/PrivateRoute'
import ForAdminRoute from './components/ForAdminRoute'
import Homepage from './pages/Homepage'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrder from './pages/PlaceOrder'
import OrderPage from './pages/OrderPage'
import ProfilePage from './pages/ProfilePage'
import OrderListPage from './pages/admin/OrderListPage'
import ProductListPage from './pages/admin/ProductListPage'
import ProductEdit from './pages/admin/ProductEdit'
import UserList from './pages/admin/UserList'
import UserEditScreen from './pages/admin/UserEditScreen'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Homepage />} />
      <Route path='/page/:pageNumber' element={<Homepage />} />
      <Route path='/search/:keyword' element={<Homepage />} />
      <Route path='/search/:keyword/page/:pageNumber' element={<Homepage />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/order/:id' element={<OrderPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Route>

      <Route path='' element={<ForAdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListPage />} />
        <Route path='/admin/productlist' element={<ProductListPage />} />
        <Route
          path='/admin/productlist/:pageNumber'
          element={<ProductListPage />}
        />
        <Route path='/admin/product/:id/edit' element={<ProductEdit />} />
        <Route path='/admin/userlist' element={<UserList />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
)
