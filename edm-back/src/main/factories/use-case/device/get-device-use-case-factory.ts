import { GetDeviceUseCase } from "@/modules/devices/data/implementations"
import { IGetDeviceUseCase } from "@/modules/devices/domain/use-case"
import { GetDeviceRepository } from "@/modules/devices/infra/db"

export const makeGetDeviceUseCase = (): IGetDeviceUseCase => {
  const getDeviceRepository = new GetDeviceRepository()

  const getDeviceUseCase = new GetDeviceUseCase(
    getDeviceRepository
  )

  return getDeviceUseCase
}
