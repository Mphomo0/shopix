import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import uploadRoutes from './routes/uploadRoutes.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const PORT = process.env.PORT || 4000

dotenv.config()

connectDB()

const app = express()

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.post('/', (req, res) => {
  const data = req.body
  res.send('Hello')
})

app.use('/api/products/', productRoutes)
app.use('/api/users/', userRoutes)
app.use('/api/orders/', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
})

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

app.listen(4000, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port: ${PORT}`.yellow
      .bold
  )
})
