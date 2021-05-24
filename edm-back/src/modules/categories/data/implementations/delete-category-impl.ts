import { IDeleteCategoryUseCase } from '../../domain/use-case/i-delete-category-use-case'
import { IDeleteCategoryRepository } from '../interfaces'

export class DeleteCategoryUseCase implements IDeleteCategoryUseCase {
  constructor (
    private readonly deleteCategoryRepository: IDeleteCategoryRepository
  ) { }
  async delete (category: number): Promise<boolean> {
    const isDeleted = await this.deleteCategoryRepository.delete(category);

    return isDeleted;
  }
}