import { IController } from '@/shared/presentation/interfaces/controller'
import { badRequest, ok } from '@/shared/presentation/helpers'
import { HttpResponse } from '@/shared/presentation/interfaces/http'
import { IListDeviceUseCase } from '../../domain/use-case'

export class ListDeviceController implements IController {
  constructor (
    private readonly listDeviceUseCase: IListDeviceUseCase
  ) { }

  async handle (): Promise<HttpResponse> {
    try {
      const devices = await this.listDeviceUseCase.index()
      
      if (!devices)
        return badRequest({
          name: 'list action',
          message: `No devices found`
        })

      return ok(devices)
    } catch (error) {
      return badRequest(error)
    }
  }
}
