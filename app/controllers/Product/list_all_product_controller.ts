import { inject } from '@adonisjs/core'

import { TController } from '#protocols/controller'
import { ListAllProductsUseCase } from '#useCases/Product/list_all_product_use_case'
import { THttpContext } from '#protocols/http'

@inject()
export default class ListAllProductsController implements TController {
  constructor(private readonly useCase: ListAllProductsUseCase) {}

  async handle({ response }: THttpContext) {
    const result = await this.useCase.execute()
    return response.status(200).send(result)
  }
}
