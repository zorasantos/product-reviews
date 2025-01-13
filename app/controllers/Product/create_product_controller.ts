import { inject } from '@adonisjs/core'

import { THttpContext } from '#protocols/http'
import { TController } from '#protocols/controller'
import { createProductValidator } from '#validators/product'
import { CreateProductUseCase } from '#useCases/Product/create_product_use_case'

@inject()
export default class CreateProductController implements TController {
  constructor(private readonly useCase: CreateProductUseCase) {}

  async handle({ request, response }: THttpContext) {
    const product = request.only(['name', 'description', 'price', 'status', 'image_url'])
    const payload = createProductValidator.parse(product)

    const result = await this.useCase.execute(payload)

    return response.status(201).send(result)
  }
}
