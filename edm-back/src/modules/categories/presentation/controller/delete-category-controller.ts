import { IController } from '@/shared/presentation/interfaces/controller'
import { badRequest, noContent } from '@/shared/presentation/helpers'
import { HttpRequest, HttpResponse } from '@/shared/presentation/interfaces/http'
import { IDeleteCategoryUseCase, IGetCategoryUseCase } from '../../domain/use-case'

export class DeleteCategoryController implements IController {
  constructor (
    private readonly getCategoryUseCase: IGetCategoryUseCase,
    private readonly deleteCategoryUseCase: IDeleteCategoryUseCase
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const categoryExists = await this.getCategoryUseCase.show(id)
      
      if (!categoryExists)
        return badRequest({
          name: 'delete action',
          message: `category id ${id} not found`
        })

      const hasDelete = await this.deleteCategoryUseCase.delete(id)

      if (hasDelete)
        return noContent()
      
      return badRequest({
        name: 'delete action',
        message: `failed to remove category id ${id}`
      })

    } catch (error) {
      return badRequest(error)
    }
  }
}
