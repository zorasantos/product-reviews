import { inject } from '@adonisjs/core'

import Product from '#models/product'
import { ProductService } from '#services/product_service'

@inject()
export class GetProductByIdUseCase {
  constructor(private readonly productService: ProductService) {}

  async execute(id: string): Promise<Product | null> {
    const response = await this.productService.findById(id)

    return response
  }
}
