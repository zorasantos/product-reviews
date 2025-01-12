import uuid from 'node:crypto'
import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@adonisjs/lucid/orm'

import { EProductStatus } from '../enums/product_status.js'

export default class Product extends BaseModel {
  public static table = 'products'

  @column({ isPrimary: true })
  declare id: uuid.UUID

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column()
  declare status: EProductStatus

  @column()
  declare image_url: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime

  @beforeCreate()
  public static assignUuid(product: Product) {
    product.id = uuid.randomUUID()
  }
}
