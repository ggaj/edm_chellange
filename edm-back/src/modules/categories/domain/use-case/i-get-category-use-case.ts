import Category from '../entity/category-entity'

export interface IGetCategoryUseCase {
  show: (id: number) => Promise<Category>
}
