import Joi from 'joi'

export const OrderJoi = Joi.object({
  email: Joi.string().required(),
  productId: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
})
