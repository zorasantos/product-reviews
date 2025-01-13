import { inject } from '@adonisjs/core'

import User from '#models/user'
import { TController } from '#protocols/controller'
import { THttpContext } from '#protocols/http'
import { loginValidator } from '#validators/auth'
import { UserService } from '#services/user_service'
import { EncryptAdapter } from '../adapters/cryptography/encrypt_adapter.js'

@inject()
export default class AuthController implements TController {
  constructor(
    private readonly useService: UserService,
    private readonly encryptAdapter: EncryptAdapter
  ) {}

  async handle({ request, response }: THttpContext) {
    const body = request.only(['email', 'password'])
    const payload = loginValidator.parse(body)

    // Criar um usecase para autenticação

    const user = await this.useService.findByEmail(payload.email)

    if (!user) {
      return response.abort({ message: 'Invalid credentials' }, 401)
    }

    const isPasswordValid = this.encryptAdapter.verify(user.password, payload.password)

    if (!isPasswordValid) {
      return response.abort({ message: 'Invalid credentials' }, 401)
    }

    const token = await User.accessTokens.create(user)

    return { value: token }
  }
}
