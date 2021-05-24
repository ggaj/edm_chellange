import { ListDeviceController } from "@/modules/devices/presentation/controller"
import { IController } from "@/shared/presentation/interfaces"
import { makeListDeviceUseCase } from "../../use-case/device"

export const makeListDeviceController = (): IController => {
  const controller = new ListDeviceController(
    makeListDeviceUseCase()
  )
  return controller
}
