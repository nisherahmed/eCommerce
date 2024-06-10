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
    'inventory.quantity': 0,
    inStock: false,
  })

  if (stock) {
    throw new Error('Insufficient quantity available in inventory')
  }

  const result = await OrderModel.create(order)

  if (result) {
    await ProductModel.updateOne(
      {
        _id: order.productId,
        'inventory.quantity': {
          $gte: 1,
        },
      },
      { $inc: { 'inventory.quantity': -1 } },
    )
    await ProductModel.updateOne(
      { _id: order.productId, 'inventory.quantity': 0 },
      { $inc: { 'inventory.quantity': -1 }, inStock: false },
    )
  }
  return result
}

export const fetchingOrders = async (mail: string) => {
  let strMail = {}
  if (mail) {
    strMail = {
      email: mail,
    }
  }
  return await OrderModel.find(strMail)
}
