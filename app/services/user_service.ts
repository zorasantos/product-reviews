import User from '../Models/user.js'

export class UserService {
  async create(user: User) {
    return await User.create(user)
  }

  async findById(id: string) {
    return await User.find(id)
  }

  async findByEmail(email: string) {
    return await User.findBy('email', email)
  }

  async findAll() {
    return await User.all()
  }

  async update(id: string, user: User) {
    return await User.query().where('id', id).update(user)
  }

  async delete(id: string) {
    return await User.query().where('id', id).delete()
  }
}
