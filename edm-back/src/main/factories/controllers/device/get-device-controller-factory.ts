import { GetDeviceController } from "@/modules/devices/presentation/controller"
import { IController } from "@/shared/presentation/interfaces"
import { makeGetDeviceUseCase } from "../../use-case/device"


export const makeGetDeviceController = (): IController => {
  const controller = new GetDeviceController(
    makeGetDeviceUseCase()
  )
  return controller
}
