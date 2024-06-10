import Joi from 'joi'

export const VariantJoi = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
})

export const InventoryJoi = Joi.object({
  quantity: Joi.number().required(),
  inStock: Joi.boolean().required(),
})

export const ProductJoiValidation = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().default([]),
  variants: Joi.array().items(VariantJoi).default([]),
  inventory: InventoryJoi,
})

export const updateProductJoiValidation = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().optional(),
  category: Joi.string().optional(),
  tags: Joi.array().default([]).optional(),
  variants: Joi.array().items(VariantJoi).default([]).optional(),
  inventory: InventoryJoi.optional(),
})
