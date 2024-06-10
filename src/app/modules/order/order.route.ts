import express from 'express'
import { getOrders, getProductByMail, insertOrders } from './order.controller'

const orderRouter = express.Router()

orderRouter.put('/orders', insertOrders)

orderRouter.get('/orders', getOrders)

orderRouter.get('/orders', getProductByMail)

export default orderRouter
