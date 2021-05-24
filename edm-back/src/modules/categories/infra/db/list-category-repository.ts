import { getRepository, Repository } from 'typeorm'
import { IListCategoryRepository } from '../../data/interfaces'
import Category from '../../domain/entity/category-entity'

export class ListCategoryRepository implements IListCategoryRepository {
  async find (): Promise<Category[]> {
    const ormRepository: Repository<Category> = getRepository(Category)

    const categories = await ormRepository.find()

    return categories
  }
}
