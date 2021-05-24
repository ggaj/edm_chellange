import { ListCategoryUseCase } from '@/modules/categories/data/implementations'
import { IListCategoryUseCase } from '@/modules/categories/domain/use-case'
import { ListCategoryRepository } from '@/modules/categories/infra/db'

export const makeListCategoryUseCase = (): IListCategoryUseCase => {
  const listCategoryRepository = new ListCategoryRepository()

  const listCategoryUseCase = new ListCategoryUseCase(
    listCategoryRepository
  )

  return listCategoryUseCase
}
