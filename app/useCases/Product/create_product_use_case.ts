import { inject } from '@adonisjs/core'

import Product from '#models/product'
import { ICreateProductData } from '#validators/product'
import { ProductService } from '#services/product_service'

@inject()
export class CreateProductUseCase {
  constructor(private readonly productService: ProductService) {}

  async execute(body: ICreateProductData): Promise<Product> {
    const response = await this.productService.create(body)
    return response
  }
}
