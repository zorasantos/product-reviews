import { inject } from '@adonisjs/core'

import { THttpContext } from '#protocols/http'
import { TController } from '#protocols/controller'
import { updateUserValidator } from '#validators/user'
import { UpdateUserUseCase } from '#useCases/User/update_user_use_case'

@inject()
export default class UpdateUserController implements TController {
  constructor(private readonly useCase: UpdateUserUseCase) {}

  async handle({ request, response }: THttpContext) {
    const user = request.only(['name', 'email'])
    const id = request.param('id')
    const payload = updateUserValidator.parse(user)

    await this.useCase.execute(id, payload)

    return response.status(200).send({ message: 'User updated successfully' })
  }
}
