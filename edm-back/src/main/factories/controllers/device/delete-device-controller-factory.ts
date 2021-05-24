import { DeleteDeviceController } from "@/modules/devices/presentation/controller"
import { IController } from "@/shared/presentation/interfaces"
import { makeDeleteDeviceUseCase, makeGetDeviceUseCase } from "../../use-case/device"

export const makeDeleteDeviceController = (): IController => {
  const controller = new DeleteDeviceController(
    makeGetDeviceUseCase(),
    makeDeleteDeviceUseCase()
  )
  return controller
}
