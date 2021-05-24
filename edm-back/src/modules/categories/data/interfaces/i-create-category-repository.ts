import Category from "../../domain/entity/category-entity";

export interface ICreateCategoryRepository {
  create: (categoryName: string) => Promise<Category>
}