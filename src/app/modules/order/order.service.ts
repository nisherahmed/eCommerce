import { ProductModel } from '../product/product.model'
import { IOrder } from './order.interface'
import { OrderModel } from './order.model'

export const orderInsert = async (order: IOrder) => {
  const isFound = await ProductModel.findById(order.productId)

  if (!isFound) {
    throw new Error('Order not found')
  }

  const stock = await ProductModel.findOne({
    _id: order.productId,
    quantity: 0,
    inStock: false,
  })

  if (!stock) {
    throw new Error('Insufficient quantity available in inventory')
  }

  const result = await OrderModel.create(order)

  if (result) {
    await ProductModel.updateOne(
      {
        _id: order.productId,
        quantity: {
          $gte: 1,
        },
      },
      { $inc: { quantity: -1 } },
    )
    await ProductModel.updateOne(
      { _id: order.productId, quantity: 0 },
      { $inc: { quantity: -1 }, inStock: false },
    )
  }
  return result
}

export const fetchingOrders = async () => {
  return await OrderModel.find({})
}

export const productByMail = async (email: string) => {
  return await OrderModel.find({ email })
}
