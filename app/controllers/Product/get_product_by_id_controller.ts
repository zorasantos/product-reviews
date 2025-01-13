import { inject } from '@adonisjs/core'

import { HttpRequest } from '#protocols/http'
import { TController } from '#protocols/controller'

import { GetProductByIdUseCase } from '#useCases/Product/get_product_by_id_use_case'

@inject()
export default class GetProductByIdController implements TController {
  constructor(private readonly useCase: GetProductByIdUseCase) {}

  async handle({ params, response }: HttpRequest) {
    const { id } = params
    const result = await this.useCase.execute(id)
    return response.status(200).send(result)
  }
}
