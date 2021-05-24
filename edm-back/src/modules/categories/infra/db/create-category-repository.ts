import { getRepository, Repository } from 'typeorm'
import { ICreateCategoryRepository } from '../../data/interfaces'
import Category from '../../domain/entity/category-entity'

export class CreateCategoryRepository implements ICreateCategoryRepository {
  async create (categoryName: string): Promise<Category> {
    try {
      const ormRepository: Repository<Category> = getRepository(Category)

      const category = ormRepository.create({
        name: categoryName
      })
      
      await ormRepository.save(category)

      return category
    } catch (error) {
      console.log(error)
    }
  }
}
