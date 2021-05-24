import Device from '../entity/device-entity'

export interface ICreateDeviceEntity {
  categoryId: number,
  color: string,
  partNumber: number
}

export interface ICreateDeviceUseCase {
  create: ({categoryId, color, partNumber}: ICreateDeviceEntity) => Promise<Device>
}
