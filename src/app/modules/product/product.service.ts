import { ProductInterface } from './product.interface'
import { ProductModel } from './product.model'

export const SProductCreate = async (product: ProductInterface) => {
  return await ProductModel.create(product)
}
