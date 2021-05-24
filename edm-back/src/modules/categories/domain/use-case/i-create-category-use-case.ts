import Category from '../entity/category-entity'

export interface ICreateCategoryUseCase {
  create: (categoryName: ICreateCategoryUseCase.Params) => Promise<ICreateCategoryUseCase.Result>
}

export namespace ICreateCategoryUseCase {
  export type Params = string
  export type Result = Category
}
