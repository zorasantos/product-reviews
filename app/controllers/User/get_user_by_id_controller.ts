import { inject } from '@adonisjs/core'

import User from '#models/user'
import { TController } from '#protocols/controller'
import { GetUserByIdUseCase } from '#useCases/User/get_user_by_id_use_case'
import { HttpRequest } from '#protocols/http'

@inject()
export default class GetUserByIdController implements TController {
  constructor(private readonly useCase: GetUserByIdUseCase) {}

  async handle({ params }: HttpRequest): Promise<User | null> {
    const { id } = params
    const response = await this.useCase.execute(id)
    return response
  }
}
