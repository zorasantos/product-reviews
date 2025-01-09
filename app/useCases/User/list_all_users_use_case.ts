import User from '../../models/user.js'
import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'

@inject()
export class ListAllUsersUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(): Promise<User[]> {
    const response = await this.userService.findAll()
    return response
  }
}