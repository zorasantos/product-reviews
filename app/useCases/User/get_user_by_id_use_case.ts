import { inject } from '@adonisjs/core'

import { UserService } from '#services/user_service'

@inject()
export class GetUserByIdUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(id: string) {
    const response = await this.userService.findById(id)

    return response
  }
}
