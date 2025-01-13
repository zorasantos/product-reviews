import { inject } from '@adonisjs/core'

import { THttpContext } from '#protocols/http'
import { TController } from '#protocols/controller'
import { createUserValidator } from '#validators/user'
import { CreateUserUseCase } from '#useCases/User/create_user_use_case'

@inject()
export default class CreateUserController implements TController {
  constructor(private readonly useCase: CreateUserUseCase) {}

  async handle({ request, response }: THttpContext) {
    const user = request.only(['name', 'email', 'password', 'role'])
    const payload = createUserValidator.parse(user)

    await this.useCase.execute(payload)

    return response.status(201).send({ message: 'User created successfully' })
  }
}
