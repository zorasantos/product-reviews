import { inject } from '@adonisjs/core'

import Product from '#models/product'
import { HttpRequest } from '#protocols/http'
import { TController } from '#protocols/controller'
import { createProductValidator } from '#validators/product'
import { CreateProductUseCase } from '#useCases/Product/create_product_use_case'

@inject()
export default class CreateProductController implements TController {
  constructor(private readonly useCase: CreateProductUseCase) {}

  async handle({ request }: HttpRequest): Promise<Product> {
    const product = request.only(['name', 'description', 'price', 'status', 'image_url'])
    const payload = createProductValidator.parse(product)

    const response = await this.useCase.execute(payload)

    return response
  }
}
