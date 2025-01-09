import { inject } from '@adonisjs/core'

import User from '#models/user'
import { UserService } from '#services/user_service'

@inject()
export class GetUserByIdUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(id: string): Promise<User | null> {
    const response = await this.userService.findById(id)

    return response
  }
}
