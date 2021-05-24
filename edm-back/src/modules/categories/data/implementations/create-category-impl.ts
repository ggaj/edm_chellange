import Category from '../../domain/entity/category-entity'
import { ICreateCategoryUseCase } from '../../domain/use-case/i-create-category-use-case';
import { ICreateCategoryRepository } from '../interfaces';

export class CreateCategoryUseCase implements ICreateCategoryUseCase {
  constructor (
    private readonly createCategoryRepository: ICreateCategoryRepository
  ) { }
  async create (categoryName: string): Promise<Category> {
    const category = await this.createCategoryRepository.create(categoryName);

    return category
  }
}