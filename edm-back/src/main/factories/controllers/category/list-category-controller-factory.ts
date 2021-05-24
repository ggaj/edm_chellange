import { ListCategoryController } from '@/modules/categories/presentation/controller'
import { IController } from '@/shared/presentation/interfaces'
import { makeListCategoryUseCase } from '../../use-case/category'

export const makeListCategoryController = (): IController => {
  const controller = new ListCategoryController(
    makeListCategoryUseCase()
  )
  return controller
}
