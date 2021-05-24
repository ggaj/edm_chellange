import Category from '../../domain/entity/category-entity'
import { IListCategoryUseCase } from '../../domain/use-case';
import { IListCategoryRepository } from '../interfaces';

export class ListCategoryUseCase implements IListCategoryUseCase {
  constructor (
    private readonly listCategoryRepository: IListCategoryRepository
  ) { }
  async index (): Promise<Category[]> {
    const categories = await this.listCategoryRepository.find();

    return categories
  }
}