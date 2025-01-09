import { inject } from '@adonisjs/core'

import User from '#models/user'
import { TController } from '#protocols/controller'
import { ListAllUsersUseCase } from '#useCases/User/list_all_users_use_case'

@inject()
export default class ListAllUsersController implements TController {
  constructor(private readonly useCase: ListAllUsersUseCase) {}

  async handle(): Promise<User[]> {
    const response = await this.useCase.execute()
    return response
  }
}
