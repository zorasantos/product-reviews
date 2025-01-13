import { inject } from '@adonisjs/core'

import { THttpContext } from '#protocols/http'
import { TController } from '#protocols/controller'
import { GetUserByIdUseCase } from '#useCases/User/get_user_by_id_use_case'

@inject()
export default class GetUserByIdController implements TController {
  constructor(private readonly useCase: GetUserByIdUseCase) {}

  async handle({ params, response }: THttpContext) {
    const { id } = params
    const result = await this.useCase.execute(id)

    if (!result) {
      // O erro não esta entrando no if
      console.log('Deu erro cara')
      return response.status(404).send({ message: 'User not found' })
    }

    return response.status(200).send(result)
  }
}
