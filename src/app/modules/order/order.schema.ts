import { Schema } from 'mongoose'
import { IOrder } from './order.interface'

export const OrderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    productId: {
      type: String,
      required: [true, 'ProductId is required'],
      ref: 'Product',
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
    },
  },
  {
    versionKey: false,
  },
)
