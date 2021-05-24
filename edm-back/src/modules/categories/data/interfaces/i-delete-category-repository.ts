export interface IDeleteCategoryRepository {
  delete: (id: number) => Promise<boolean>
}