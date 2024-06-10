import { model } from 'mongoose'
import { OrderSchema } from './order.schema'
import { IOrder } from './order.interface'

export const OrderModel = model<IOrder>('Order', OrderSchema)
