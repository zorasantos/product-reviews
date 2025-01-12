import { inject } from '@adonisjs/core'

import User from '#models/user'
import { UserService } from '#services/user_service'

@inject()
export class ListAllUsersUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(): Promise<User[]> {
    const response = await this.userService.findAll()
    return response
  }
}
