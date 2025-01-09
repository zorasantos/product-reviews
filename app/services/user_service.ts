import User from '#models/user'
import { ICreateUserData, IUpdateUserData } from '#validators/user'

export class UserService {
  async create(user: ICreateUserData) {
    return await User.create(user)
  }

  async findById(id: string) {
    return await User.find(id)
  }

  async findAll() {
    return await User.all()
  }

  async update(id: string, user: IUpdateUserData) {
    return await User.query().where('id', id).update(user)
  }

  async delete(id: string) {
    return await User.query().where('id', id).delete()
  }
}
