import { z } from 'zod'
import { EProductStatus } from '../enums/product_status.js'

export const createProductValidator = z.object({
  name: z.string().min(6),
  description: z.string(),
  price: z.number(),
  status: z.nativeEnum(EProductStatus),
  image_url: z.string(),
})

export const updateProductValidator = createProductValidator

export type ICreateProductData = z.infer<typeof createProductValidator>
export type IUpdateProductData = z.infer<typeof createProductValidator>
