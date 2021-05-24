import { IController } from '@/shared/presentation/interfaces/controller'
import { badRequest, noContent } from '@/shared/presentation/helpers'
import { HttpRequest, HttpResponse } from '@/shared/presentation/interfaces/http'
import { IDeleteDeviceUseCase, IGetDeviceUseCase } from '../../domain/use-case'

export class DeleteDeviceController implements IController {
  constructor (
    private readonly getDeviceUseCase: IGetDeviceUseCase,
    private readonly deleteDeviceUseCase: IDeleteDeviceUseCase
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const deviceExists = await this.getDeviceUseCase.show(id)
      
      if (!deviceExists)
        return badRequest({
          name: 'delete action',
          message: `Device id ${id} not found`
        })

      const hasDelete = await this.deleteDeviceUseCase.delete(id)

      if (hasDelete)
        return noContent()
      
      return badRequest({
        name: 'delete action',
        message: `failed to remove Device id ${id}`
      })

    } catch (error) {
      return badRequest(error)
    }
  }
}
