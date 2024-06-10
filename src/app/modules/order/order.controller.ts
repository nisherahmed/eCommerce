import { Request, Response } from 'express'
import { fetchingOrders, orderInsert } from './order.service'
import { OrderJoi } from './order.validate'

export const insertOrders = async (req: Request, res: Response) => {
  try {
    const { value, error } = await OrderJoi.validate(req.body)
    if (error) {
      return res.status(400).send({
        success: false,
        message: error.message || 'Bad Request',
        error,
      })
    }

    return res.status(201).send({
      success: true,
      message: 'Order created successfully!',
      data: await orderInsert(value),
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

export const getOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query
    const result = await fetchingOrders(email as string)
    return res.status(201).send({
      success: true,
      message: 'Orders fetched successfully!',
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
