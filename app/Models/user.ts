import uuid from 'node:crypto'

import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, beforeSave } from '@adonisjs/lucid/orm'

import hash from '@adonisjs/core/services/hash'
import { EUserRole } from '../enums/user_role.js'

export default class User extends BaseModel {
  public static table = 'users'

  @column({ isPrimary: true })
  declare id: uuid.UUID

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare role: EUserRole

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime

  @beforeCreate()
  public static assignUuid(user: User) {
    user.id = uuid.randomUUID()
  }

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }
}
