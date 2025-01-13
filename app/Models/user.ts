import uuid from 'node:crypto'

import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, beforeSave } from '@adonisjs/lucid/orm'

import { EUserRole } from '../enums/user_role.js'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { EncryptAdapter } from '../adapters/cryptography/encrypt_adapter.js'

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
      const encryptAdapter = new EncryptAdapter()
      user.password = await encryptAdapter.make(user.password)
    }
  }

  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '1 minute',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  })
}
