import express from 'express'
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from './product.controller'
const ProductRouter = express.Router()

ProductRouter.post('/', createProduct)

ProductRouter.get('/', getProducts)

ProductRouter.get('/:productId', getSingleProduct)

ProductRouter.put('/:productId', updateProduct)

ProductRouter.delete('/:productId', deleteProduct)

export default ProductRouter
