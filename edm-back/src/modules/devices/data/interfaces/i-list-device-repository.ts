import Device from "../../domain/entity/device-entity";

export interface IListDeviceRepository {
  find: () => Promise<Device[]>
}