import { DeleteCategoryUseCase } from '@/modules/categories/data/implementations'
import { IDeleteCategoryUseCase } from '@/modules/categories/domain/use-case'
import { DeleteCategoryRepository } from '@/modules/categories/infra/db'

export const makeDeleteCategoryUseCase = (): IDeleteCategoryUseCase => {
  const deleteCategoryRepository = new DeleteCategoryRepository()

  const deleteCategoryUseCase = new DeleteCategoryUseCase(
    deleteCategoryRepository
  )

  return deleteCategoryUseCase
}
