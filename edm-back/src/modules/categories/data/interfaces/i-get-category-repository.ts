import Category from '../../domain/entity/category-entity';

export interface IGetCategoryRepository {
  finOne: (id: number) => Promise<Category>
}