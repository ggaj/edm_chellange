import { getRepository, Repository } from 'typeorm'
import { IGetCategoryRepository } from '../../data/interfaces'
import Category from '../../domain/entity/category-entity'

export class GetCategoryRepository implements IGetCategoryRepository {
  async finOne (id: number): Promise<Category> {
    const ormRepository: Repository<Category> = getRepository(Category)

    const category = await ormRepository.findOne({ id })

    return category
  }
}
