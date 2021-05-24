import { IController } from '@/shared/presentation/interfaces/controller'
import { badRequest, missingFields, ok } from '@/shared/presentation/helpers'
import { IValidationSchema } from '@/shared/presentation/interfaces'
import { HttpRequest, HttpResponse } from '@/shared/presentation/interfaces/http'
import {  deviceSchema } from '../schema/device-schema'
import { ICreateDeviceUseCase } from '../../domain/use-case'

export class CreateDeviceController implements IController {
  constructor (
    private readonly validationSchema: IValidationSchema,
    private readonly createDeviceUseCase: ICreateDeviceUseCase
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validationSchema.validate(deviceSchema, httpRequest.body)
      if (error) {
        return missingFields(error)
      }

      const { categoryId, color, partNumber } = httpRequest.body;

      const category = await this.createDeviceUseCase.create({categoryId, color, partNumber})

      return ok(category)
    } catch (error) {
      return badRequest(error)
    }
  }
}
