import { CreateCategoryUseCase } from '@/modules/categories/data/implementations'
import { ICreateCategoryUseCase } from '@/modules/categories/domain/use-case'
import { CreateCategoryRepository } from '@/modules/categories/infra/db'

export const makeCreateCategoryUseCase = (): ICreateCategoryUseCase => {
  const createCategoryRepository = new CreateCategoryRepository()

  const createCategoryUseCase = new CreateCategoryUseCase(
    createCategoryRepository
  )

  return createCategoryUseCase
}
