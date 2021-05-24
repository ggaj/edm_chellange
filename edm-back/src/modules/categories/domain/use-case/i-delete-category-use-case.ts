export interface IDeleteCategoryUseCase {
  delete: (id: number) => Promise<boolean>
}
