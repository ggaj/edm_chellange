import { ListDeviceUseCase } from "@/modules/devices/data/implementations"
import { IListDeviceUseCase } from "@/modules/devices/domain/use-case"
import { ListDeviceRepository } from "@/modules/devices/infra/db"

export const makeListDeviceUseCase = (): IListDeviceUseCase => {
  const listDeviceRepository = new ListDeviceRepository()

  const listDeviceUseCase = new ListDeviceUseCase(
    listDeviceRepository
  )

  return listDeviceUseCase
}
