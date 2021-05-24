import { IController } from '@/shared/presentation/interfaces/controller'
import { badRequest, ok } from '@/shared/presentation/helpers'
import { HttpResponse } from '@/shared/presentation/interfaces/http'
import { IListCategoryUseCase } from '../../domain/use-case'

export class ListCategoryController implements IController {
  constructor (
    private readonly listCategoryUseCase: IListCategoryUseCase
  ) { }

  async handle (): Promise<HttpResponse> {
    try {
      const categories = await this.listCategoryUseCase.index()
      
      if (!categories)
        return badRequest({
          name: 'list action',
          message: `No categories found`
        })

      return ok(categories)
    } catch (error) {
      return badRequest(error)
    }
  }
}
