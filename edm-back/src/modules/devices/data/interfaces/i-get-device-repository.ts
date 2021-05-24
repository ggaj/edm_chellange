import Device from "../../domain/entity/device-entity";

export interface IGetDeviceRepository {
  finOne: (id: number) => Promise<Device>
}