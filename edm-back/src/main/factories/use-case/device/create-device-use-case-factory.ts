import { CreateDeviceUseCase } from "@/modules/devices/data/implementations"
import { ICreateDeviceUseCase } from "@/modules/devices/domain/use-case"
import { CreateDeviceRepository } from "@/modules/devices/infra/db"

export const makeCreateDeviceUseCase = (): ICreateDeviceUseCase => {
  const createDeviceRepository = new CreateDeviceRepository()

  const createDeviceUseCase = new CreateDeviceUseCase(
    createDeviceRepository
  )

  return createDeviceUseCase
}
