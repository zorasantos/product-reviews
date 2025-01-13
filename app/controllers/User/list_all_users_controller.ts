import { inject } from '@adonisjs/core'

import { THttpContext } from '#protocols/http'
import { TController } from '#protocols/controller'
import { ListAllUsersUseCase } from '#useCases/User/list_all_users_use_case'

@inject()
export default class ListAllUsersController implements TController {
  constructor(private readonly useCase: ListAllUsersUseCase) {}

  async handle({ response }: THttpContext) {
    const result = await this.useCase.execute()
    return response.status(200).send(result)
  }
}
