import Product from '#models/product'
import { ICreateProductData, IUpdateProductData } from '#validators/product'

export class ProductService {
  async create(data: ICreateProductData) {
    return await Product.create(data)
  }

  async findById(id: string) {
    return await Product.find(id)
  }

  async findAll() {
    return await Product.all()
  }

  async update(id: string, data: IUpdateProductData) {
    const body = { ...data, updatedAt: new Date() }
    return await Product.query().where('id', id).update(body)
  }

  async delete(id: string) {
    return await Product.query().where('id', id).delete()
  }
}
