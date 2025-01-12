import User from '#models/user'
import { ICreateUserData, IUpdateUserData } from '#validators/user'

export class UserService {
  async create(user: ICreateUserData) {
    return await User.create(user)
  }

  async findById(id: string) {
    const user = await User.find(id)

    if (!user) {
      throw new Error('User not found!')
    }
    return user
  }

  async findAll() {
    return await User.all()
  }

  async update(id: string, user: IUpdateUserData) {
    const body = { ...user, updatedAt: new Date() }
    return await User.query().where('id', id).update(body)
  }

  async delete(id: string) {
    return await User.query().where('id', id).delete()
  }
}
