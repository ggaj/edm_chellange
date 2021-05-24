import { CreateDeviceController } from '@/modules/devices/presentation/controller'
import { IController } from '@/shared/presentation/interfaces'
import { makeCreateDeviceUseCase } from '../../use-case/device'
import { makeDeviceValidation } from '../../validations/pix'

export const makeCreateDeviceController = (): IController => {
  const controller = new CreateDeviceController(
    makeDeviceValidation(),
    makeCreateDeviceUseCase()
  )
  return controller
}
