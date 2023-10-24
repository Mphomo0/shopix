import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

const PORT = process.env.PORT || 4000

dotenv.config()

connectDB()

const app = express()

app.post('/', (req, res) => {
  const data = req.body
  res.send('Hello')
})

app.use('/api/products/', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(4000, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port: ${PORT}`.yellow
      .bold
  )
})
