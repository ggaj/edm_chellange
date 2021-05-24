import { IController } from '@/shared/presentation/interfaces/controller'
import { badRequest, missingFields, ok } from '@/shared/presentation/helpers'
import { IValidationSchema } from '@/shared/presentation/interfaces'
import { HttpResponse } from '@/shared/presentation/interfaces/http'
import { ICreateCategoryUseCase } from '../../domain/use-case/i-create-category-use-case'
import { categorySchema } from '../schema/category-schema'

export class CreateCategoryController implements IController {
  constructor (
    private readonly validationSchema: IValidationSchema,
    private readonly createCategoryUseCase: ICreateCategoryUseCase
  ) { }

  async handle (request: CreateCategoryController.Request): Promise<HttpResponse> {
    try {
      
      const error = await this.validationSchema.validate(categorySchema, request)
      if (error) {
        return missingFields(error)
      }

      const { name } = request;

      const category = await this.createCategoryUseCase.create(name)

      return ok(category)
    } catch (error) {
      return badRequest(error)
    }
  }
}

export namespace CreateCategoryController {
  export type Request = {
    name: string
  }
}
