import { inject } from '@adonisjs/core'

import { ProductService } from '#services/product_service'
import { IUpdateProductData } from '#validators/product'

@inject()
export class UpdateProductUseCase {
  constructor(private readonly productService: ProductService) {}

  async execute(id: string, body: IUpdateProductData): Promise<{ message: string }> {
    await this.productService.update(id, body)

    return { message: `Product updated successfully` }
  }
}
