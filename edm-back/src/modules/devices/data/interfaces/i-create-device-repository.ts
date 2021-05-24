import Device from "../../domain/entity/device-entity";
import { ICreateDeviceEntity } from "../../domain/use-case";

export interface ICreateDeviceRepository {
  create: ({categoryId, color, partNumber}: ICreateDeviceEntity) => Promise<Device>
}