import { IController } from '@/shared/presentation/interfaces/controller'
import { badRequest, ok } from '@/shared/presentation/helpers'
import { HttpRequest, HttpResponse } from '@/shared/presentation/interfaces/http'
import { IGetCategoryUseCase } from '../../domain/use-case'

export class GetCategoryController implements IController {
  constructor (
    private readonly getCategoryUseCase: IGetCategoryUseCase
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const category = await this.getCategoryUseCase.show(id)
      
      if (!category)
        return badRequest({
          name: 'get action',
          message: `category id ${id} not found`
        })

      return ok(category)
    } catch (error) {
      return badRequest(error)
    }
  }
}
