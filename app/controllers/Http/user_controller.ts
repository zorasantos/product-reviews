import { inject } from '@adonisjs/core'
import { UserService } from '#services/user_service'
import { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user'

@inject()
export default class UserController {
  constructor(private userService: UserService) {}

  index() {
    return this.userService.findAll()
  }

  async create({ request }: HttpContext) {
    const user = request.only(['name', 'email', 'password', 'role'])

    try {
      const payload = createUserValidator.parse(user)
      return await this.userService.create(payload)
    } catch (error) {
      return { error }
    }
  }
}
