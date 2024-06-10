import { Schema } from 'mongoose'
import { ProductInterface } from './product.interface'

const InventorySchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    _id: false,
  },
)

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
      required: [true, 'Tags is required'],
    },
    variants: {
      type: [Object],
      required: [true, 'Variant is required'],
    },
    inventory: InventorySchema,
  },
  {
    versionKey: false,
  },
)
