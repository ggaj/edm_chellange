import Device from '../entity/device-entity'

export interface IListDeviceUseCase {
  index: () => Promise<Device[]>
}
