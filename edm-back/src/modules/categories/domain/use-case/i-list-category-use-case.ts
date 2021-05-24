import Category from '../entity/category-entity'

export interface IListCategoryUseCase {
  index: () => Promise<Category[]>
}
