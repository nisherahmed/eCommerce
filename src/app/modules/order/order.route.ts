import express from 'express'
import { getOrders, insertOrders } from './order.controller'

const orderRouter = express.Router()

orderRouter.post('/', insertOrders)

orderRouter.get('/', getOrders)

export default orderRouter
