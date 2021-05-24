import { CreateCategoryController } from '@/modules/categories/presentation/controller'
import { IController } from '@/shared/presentation/interfaces'
import { makeCreateCategoryUseCase } from '../../use-case/category/create-category-use-case-factory'
import { makeCategoryValidation } from '../../validations/pix'

export const makeCreateCategoryController = (): IController => {
  const controller = new CreateCategoryController(
    makeCategoryValidation(),
    makeCreateCategoryUseCase()
  )
  return controller
}
