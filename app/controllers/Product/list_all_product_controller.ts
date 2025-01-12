import { inject } from '@adonisjs/core'

import Product from '#models/product'

import { TController } from '#protocols/controller'
import { ListAllProductsUseCase } from '#useCases/Product/list_all_product_use_case'

@inject()
export default class ListAllProductsController implements TController {
  constructor(private readonly useCase: ListAllProductsUseCase) {}

  async handle(): Promise<Product[]> {
    const response = await this.useCase.execute()
    return response
  }
}
