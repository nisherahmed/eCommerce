import { Schema } from 'mongoose'
import { ProductInterface } from './product.interface'

export const ProductSchema = new Schema<ProductInterface>(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Name is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    tags: {
      type: [String],
      default: [],
    },
    variants: {
      type: [Object],
      default: [],
    },
  },
  {
    versionKey: false,
  },
)
