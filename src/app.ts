import express, { Application, Request, Response } from 'express'
import orderRouter from './app/modules/order/order.route'
import ProductRouter from './app/modules/product/product.routes'
const app: Application = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes

app.use('/api/products', ProductRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Server is up and running',
    status: 200,
  })
})

app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found`,
  })
})

export default app
