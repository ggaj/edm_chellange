import { GetCategoryUseCase } from '@/modules/categories/data/implementations'
import { IGetCategoryUseCase } from '@/modules/categories/domain/use-case'
import { GetCategoryRepository } from '@/modules/categories/infra/db'

export const makeGetCategoryUseCase = (): IGetCategoryUseCase => {
  const getCategoryRepository = new GetCategoryRepository()

  const getCategoryUseCase = new GetCategoryUseCase(
    getCategoryRepository
  )

  return getCategoryUseCase
}
