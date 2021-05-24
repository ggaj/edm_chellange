import { DeleteDeviceUseCase } from "@/modules/devices/data/implementations"
import { IDeleteDeviceUseCase } from "@/modules/devices/domain/use-case"
import { DeleteDeviceRepository } from "@/modules/devices/infra/db"

export const makeDeleteDeviceUseCase = (): IDeleteDeviceUseCase => {
  const deleteDeviceRepository = new DeleteDeviceRepository()

  const deleteDeviceUseCase = new DeleteDeviceUseCase(
    deleteDeviceRepository
  )

  return deleteDeviceUseCase
}
