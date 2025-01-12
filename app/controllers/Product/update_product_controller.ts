import { inject } from '@adonisjs/core'

import { HttpRequest } from '#protocols/http'
import { TController } from '#protocols/controller'

import { UpdateProductUseCase } from '#useCases/Product/update_product_use_case'
import { updateProductValidator } from '#validators/product'

@inject()
export default class UpdateProductController implements TController {
  constructor(private readonly useCase: UpdateProductUseCase) {}

  async handle({ request }: HttpRequest): Promise<{ message: string }> {
    const user = request.only(['name', 'description', 'price', 'status', 'image_url'])
    const id = request.param('id')
    const payload = updateProductValidator.parse(user)

    const response = await this.useCase.execute(id, payload)

    return response
  }
}
