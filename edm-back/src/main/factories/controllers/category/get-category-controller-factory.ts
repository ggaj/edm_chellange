import { GetCategoryController } from '@/modules/categories/presentation/controller'
import { IController } from '@/shared/presentation/interfaces'
import { makeGetCategoryUseCase } from '../../use-case/category'

export const makeGetCategoryController = (): IController => {
  const controller = new GetCategoryController(
    makeGetCategoryUseCase()
  )
  return controller
}
