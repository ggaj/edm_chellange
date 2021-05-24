import { DeleteCategoryController } from '@/modules/categories/presentation/controller'
import { IController } from '@/shared/presentation/interfaces'
import { makeDeleteCategoryUseCase, makeGetCategoryUseCase } from '../../use-case/category'

export const makeDeleteCategoryController = (): IController => {
  const controller = new DeleteCategoryController(
    makeGetCategoryUseCase(),
    makeDeleteCategoryUseCase()
  )
  return controller
}
