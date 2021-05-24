import Category from '../../domain/entity/category-entity'
import { IGetCategoryUseCase } from '../../domain/use-case/i-get-category-use-case';
import { IGetCategoryRepository } from '../interfaces';

export class GetCategoryUseCase implements IGetCategoryUseCase {
  constructor (
    private readonly getCategoryRepository: IGetCategoryRepository
  ) { }
  async show (id: number): Promise<Category> {
    const category = await this.getCategoryRepository.finOne(id);

    return category
  }
}