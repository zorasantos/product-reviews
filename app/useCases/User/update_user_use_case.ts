import { inject } from '@adonisjs/core'

import { IUpdateUserData } from '#validators/user'
import { UserService } from '#services/user_service'

@inject()
export class UpdateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(id: string, body: IUpdateUserData): Promise<{ message: string }> {
    await this.userService.update(id, body)

    return { message: `User updated successfully` }
  }
}
