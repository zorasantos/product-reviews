import User from '../../models/user.js'
import { UserService } from '#services/user_service'
import { ICreateUserData } from '#validators/user'
import { inject } from '@adonisjs/core'

@inject()
export class CreateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(body: ICreateUserData): Promise<User> {
    const response = await this.userService.create(body)
    return response
  }
}
