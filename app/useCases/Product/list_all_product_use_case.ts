import { inject } from '@adonisjs/core'

import Product from '#models/product'
import { ProductService } from '#services/product_service'

@inject()
export class ListAllProductsUseCase {
  constructor(private readonly productService: ProductService) {}

  async execute(): Promise<Product[]> {
    const response = await this.productService.findAll()
    return response
  }
}
