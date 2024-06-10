import { Request, Response } from 'express'
import { SProductCreate } from './product.service'
import { ProductModel } from './product.model'
import {
  ProductJoiValidation,
  updateProductJoiValidation,
} from './product.validate'

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await req.body
    const { value, error } = await ProductJoiValidation.validate(product)
    if (error) {
      return res.status(400).send({
        success: false,
        message: error.message || 'Bad Request',
        error,
      })
    }
    const result = await SProductCreate(value)
    return res.status(201).send({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message || 'Internal Server Error',
      error,
    })
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    let searchQuery = {}
    const { searchTerm } = req.query

    if (searchTerm) {
      searchQuery = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
          { tags: { $elemMatch: { $regex: searchTerm, $options: 'i' } } },
          { description: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    }
    const result = await ProductModel.find(searchQuery)
    return res.status(200).send({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message || 'Internal Server Error',
      error,
    })
  }
}

export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = await req.params
    const existProduct = await ProductModel.findById(productId)
    if (!existProduct) {
      throw new Error('Product not found!')
    }
    const result = await ProductModel.findById(productId)
    return res.status(200).send({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = await req.params
    const product = await req.body
    const { value, error } = await updateProductJoiValidation.validate(product)
    if (error) {
      return res.status(400).send({
        success: false,
        message: error.message || 'Bad Request',
        error,
      })
    }
    const existProduct = await ProductModel.findById(productId)
    if (!existProduct) {
      throw new Error('Product not found!')
    }
    const result = await ProductModel.findByIdAndUpdate(productId, value, {
      new: true,
      projection: {
        password: 0,
        orders: 0,
      },
    })
    return res.status(200).send({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = await req.params
    const existProduct = await ProductModel.findById(productId)
    if (!existProduct) {
      throw new Error('Product not found!')
    }
    await ProductModel.findByIdAndDelete(productId)
    return res.status(200).send({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    })
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    })
  }
}
