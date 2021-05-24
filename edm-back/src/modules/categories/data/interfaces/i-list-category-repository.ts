import Category from '../../domain/entity/category-entity';

export interface IListCategoryRepository {
  find: () => Promise<Category[]>
}