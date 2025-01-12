import { inject } from '@adonisjs/core'

import { HttpRequest } from '#protocols/http'
import { TController } from '#protocols/controller'

import Product from '#models/product'
import { GetProductByIdUseCase } from '#useCases/Product/get_product_by_id_use_case'

@inject()
export default class GetProductByIdController implements TController {
  constructor(private readonly useCase: GetProductByIdUseCase) {}

  async handle({ params }: HttpRequest): Promise<Product | null> {
    const { id } = params
    const response = await this.useCase.execute(id)
    return response
  }
}
