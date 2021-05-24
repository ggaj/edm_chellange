import { getRepository, Repository } from 'typeorm'
import { IDeleteCategoryRepository } from '../../data/interfaces'
import Category from '../../domain/entity/category-entity'

export class DeleteCategoryRepository implements IDeleteCategoryRepository {
  async delete (id: number): Promise<boolean> {
    const ormRepository: Repository<Category> = getRepository(Category)

    const isDeleted = await ormRepository.delete({ id })

    return isDeleted.affected > 0
  }
}
