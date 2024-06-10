import { model } from 'mongoose'
import { ProductSchema } from './product.schema'
import { ProductInterface } from './product.interface'

export const ProductModel = model<ProductInterface>('Product', ProductSchema)
