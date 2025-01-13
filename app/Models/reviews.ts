import uuid from 'node:crypto'
import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import Product from './product.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Review extends BaseModel {
  public static table = 'reviews'

  @column({ isPrimary: true })
  declare id: uuid.UUID

  @column()
  declare product_id: uuid.UUID

  @column()
  declare user_id: uuid.UUID

  @column()
  declare comment: string

  @column()
  declare rating: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime

  @beforeCreate()
  public static assignUuid(review: Review) {
    review.id = uuid.randomUUID()
  }

  @belongsTo(() => Product, {
    foreignKey: 'product_id',
  })
  declare product: BelongsTo<typeof Product>

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  declare user: BelongsTo<typeof User>
}
