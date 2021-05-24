import { IController } from '@/shared/presentation/interfaces/controller'
import { badRequest, ok } from '@/shared/presentation/helpers'
import { HttpRequest, HttpResponse } from '@/shared/presentation/interfaces/http'
import { IGetDeviceUseCase } from '../../domain/use-case'

export class GetDeviceController implements IController {
  constructor (
    private readonly getDeviceUseCase: IGetDeviceUseCase
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const device = await this.getDeviceUseCase.show(id)
      
      if (!device)
        return badRequest({
          name: 'get action',
          message: `Devices id ${id} not found`
        })

      return ok(device)
    } catch (error) {
      return badRequest(error)
    }
  }
}
