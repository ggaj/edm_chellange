import Device from '../entity/device-entity'

export interface IGetDeviceUseCase {
  show: (id: number) => Promise<Device>
}
